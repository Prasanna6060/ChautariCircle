import express from 'express';
import { getUser, createUser } from '../Controllers/userController.js';

const router = express.Router();

router.get('/', getUser);
router.post('/', createUser);
router.put('/', getUser);
router.delete('/', getUser);

export default router;