// src/routes/userRoutes.ts
import { Router } from 'express';
import userController from '../../controllers/user/userController';

const router = Router();

// Rota para login de usuário
router.post('/login', userController.loginUser);

// Rota para criar um novo post relacionado ao usuário
router.post('/createPost', userController.createPost);

export default router;
