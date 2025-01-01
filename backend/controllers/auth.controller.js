import User from "../models/user.module.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookies from "../utils/GenerateJwt.js";
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: "invalid username or password" });
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );
    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "invalid username or password" });
    }
    generateTokenAndSetCookies(user._id, res);
    res.status(200).json({
      id: user._id,
      fullname: user.fullname,
      username: user.username,
      profileImage: user.profileImage,
    });
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
    console.log("from login ", error.message);
  }
};
export const signup = async (req, res) => {
  try {
    const { fullname, username, password, confirmpassword, gender } = req.body;
    if (password !== confirmpassword) {
      console.log(password, confirmpassword);
      res.status(400).json({ error: "password don't match" });
    }
    const user = await User.findOne({ username });
    if (user) {
      res.status(400).json({ error: "username already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);
    //boy profile image
    const boyProfile = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfile = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullname,
      username,
      password: hashpassword,
      gender,
      profileImage: gender == "male" ? boyProfile : girlProfile,
    });
    if (newUser) {
      generateTokenAndSetCookies(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        id: newUser._id,
        fullname: newUser.fullname,
        username: newUser.username,
        profileImage: newUser.profileImage,
      });
    } else {
      res.status(400).json({ error: "invalid user data" });
    }
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
    console.log("from signUp ", error.message);
  }
};
export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "logged out successfuly" });
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
    console.log("from logout ", error.message);
  }
};
