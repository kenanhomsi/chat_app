import express from "express";
import { getUsersForSideBar } from "../controllers/users.controller.js";
import productMiddlerware from "../middleware/productRoute.js";
const router = express.Router();

router.get("/", productMiddlerware, getUsersForSideBar);

export default router;
