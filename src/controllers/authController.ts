import { Router, Request, Response } from 'express';
import * as AuthService from '../services/authService';

const router = Router();

router.post('/signin', (req: Request, res: Response) => {
  return res.send(AuthService.signIn(req.body?.password));
});

export default router;
