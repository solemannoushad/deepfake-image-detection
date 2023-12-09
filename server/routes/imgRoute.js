import express from "express"
import { imgController } from "../controllers/imgController.js";

const router = express.Router();

router.post('/process', imgController)

export default router