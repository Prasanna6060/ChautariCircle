import express from 'express';
import { getPosts } from '../Controllers/postController.js';

const router = express.Router();

router.get('/', getPosts)

export default router;