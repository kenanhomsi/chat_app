import jwt from "jsonwebtoken";
import User from "../models/user.module.js";

const productMiddlerware = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      res.status(401).json({ error: "unauthorized no token provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRETKEY);
    if (!decoded) {
      res.status(401).json({ error: "unauthorized the token invalid" });
    }
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      res.status(401).json({ error: "user not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("error in productMiddlerware", error.message);
    res.status(500).json({ error: "internal server error" });
  }
};
export default productMiddlerware;
