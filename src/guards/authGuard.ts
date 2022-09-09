import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { getToken } from '../services/authService';

function authGuard(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization?.split(' ')[1] || '';
    jwt.verify(token, process.env.JWT_TOKEN as string);
    next();
  } catch (err) {
    res.status(401).json({
      error: 'Unathorized',
    });
  }
}

export { authGuard };
