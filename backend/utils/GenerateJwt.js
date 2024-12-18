import jwt from "jsonwebtoken";

const generateTokenAndSetCookies = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRETKEY, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true, // prevent xss attacks cross-site scripting
    sameSite: "strict", //for CSRF attacks
    secure: process.env.DEV_ENV !== "development",
  });
};

export default generateTokenAndSetCookies;
