import { Router } from 'express';
import AuthController from '../controllers/authController';
import RecipesController from '../controllers/recipeController';
import { authGuard } from '../guards/authGuard';
const router = Router();

router.use('/auth', AuthController);
router.use('/recipes', authGuard, RecipesController);

export default router;
