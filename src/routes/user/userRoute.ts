// src/routes/userRoutes.ts
import { Router } from 'express';
import userController from '../../controllers/user/userController';

const userRoutes = Router();
// Rota para registro de usuário
userRoutes.post('/register', userController.registerUser);

// Rota para login de usuário
userRoutes.post('/login', userController.loginUser);

export default userRoutes;


