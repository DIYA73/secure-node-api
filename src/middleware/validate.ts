import { validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export function validate(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
    }
    next();
}
