import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import messagesRoutes from "./routes/messages.route.js";
import usersRoutes from "./routes/users.route.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messagesRoutes);
app.use("/api/users", usersRoutes);

app.get("/api/", (req, res) => {
  res.status(200).send("yes kenan");
});
app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server is listen on port  ${PORT}`);
});
