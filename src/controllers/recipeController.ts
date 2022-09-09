import * as RecipeService from '../services/recipeService';
import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  const test = await RecipeService.findAll();
  return res.send(test);
});

router.post('/', async (req: Request, res: Response) => {
  return res.send(await RecipeService.createOrUpdate(req.body));
});

router.delete('/:id', async (req: Request, res: Response) => {
  return res.send(await RecipeService.deleteById(req.params.id));
});

export default router;
