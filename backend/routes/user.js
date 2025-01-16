import express from 'express';
import { getUser, createUser, getUserById } from '../Controllers/userController.js';

const router = express.Router();

router.get('/', getUser);
router.get('/:id', getUserById)
router.post('/', createUser);
router.put('/', getUser);
router.delete('/', getUser);

export default router;