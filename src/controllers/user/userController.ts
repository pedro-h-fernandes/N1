// src/controllers/userController.ts
import { Request, Response } from 'express';
import User from '../../models/User';
import Post from '../../models/Post';

export default class UserController {
    // Método para registro de usuário
    static async registerUser(req: Request, res: Response): Promise<void> {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            res.status(400).json({ error: 'Preencha todos os campos' });
            return;
        }

        const user = new User();
        user.name = name;
        user.email = email;
        user.password = password;

        try {
            await user.save();
            res.status(201).json({ message: 'Usuário cadastrado com sucesso', user: user });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao cadastrar usuário' });
        }

    }

    // Método para login de usuário
    static async loginUser(req: Request, res: Response): Promise<void> {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ error: 'Preencha todos os campos' });
            return;
        }

        const user = await User.findOne({ where: { email } });

        if (!user) {
            res.status(404).json({ error: 'Usuário não encontrado' });
            return;
        }

        if (user.password !== password) {
            res.status(401).json({ error: 'Senha incorreta' });
            return;
        }

        res.status(200).json({ message: 'Usuário logado com sucesso', user: user });
    }

    static async createPost(req: Request, res: Response): Promise<void> {
        const { title, content, userId } = req.body;

        if (!title || !content || !userId) {
            res.status(400).json({ error: 'Preencha todos os campos' });
            return;
        }

        const user = await User.findOne({ where: { id: userId } });

        if (!user) {
            res.status(404).json({ error: 'Usuário não encontrado' });
            return;
        }

        const post = new Post();
        post.title = title;
        post.content = content;
        post.author = user.name;

        try {
            await post.save();
            res.status(201).json({ message: 'Post criado com sucesso', post: post });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar post' });
        }
      }
}
