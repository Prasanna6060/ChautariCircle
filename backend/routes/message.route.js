import express from 'express';
import { sendMessage } from '../Controllers/message.controller.js';
import { protectRoute } from '../middleware/protectRoute.js';

const router = express.Router();

router.post("/", protectRoute,sendMessage);

export default router;