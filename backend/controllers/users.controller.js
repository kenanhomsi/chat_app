import User from "../models/user.module.js";

export const getUsersForSideBar = async (req, res) => {
  try {
    const loggedUserId = req.user._id;
    const allUsers = await User.find({ _id: { $ne: loggedUserId } }).select(
      "-password"
    );
    res.status(200).json(allUsers);
  } catch (error) {
    console.log("error in getUsersForSideBar ", error.message);
    res.status(500).json({ error: "internal server error" });
  }
};
