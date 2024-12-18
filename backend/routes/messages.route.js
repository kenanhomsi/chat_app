import express from "express";
import { sendMessage, getMessage } from "../controllers/message.controller.js";
import productMiddlerware from "../middleware/productRoute.js";
const router = express.Router();

router.get("/:id", productMiddlerware, getMessage);
router.post("/send/:id", productMiddlerware, sendMessage);

export default router;
