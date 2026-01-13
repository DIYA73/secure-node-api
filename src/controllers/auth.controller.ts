import { Request, Response } from 'express';
import { hashPassword } from '../utils/password';

export async function register(req: Request, res: Response) {
    const { email, password } = req.body;

    const hashedPassword = await hashPassword(password);

  // Simulate DB save
    res.status(201).json({
    message: 'User registered securely',
    email,
    passwordHash: hashedPassword
    });
}
