import express from 'express';
import { body } from 'express-validator';
import { register } from '../controllers/auth.controller';
import { validate } from '../middleware/validate';
import { loginLimiter } from '../middleware/rateLimiter';

const router = express.Router();

router.post(
    '/register',
    loginLimiter,
    [
    body('email').isEmail(),
    body('password').isLength({ min: 8 })
    ],
    validate,
    register
);

export default router;
