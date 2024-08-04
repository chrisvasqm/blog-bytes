
import { Request, Response, Router } from 'express';
import z from 'zod';
import PostService from '../services/post-service';

const router = Router();
const service = new PostService();
const schema = z.object({
  title: z.string({ required_error: 'Title is required' }).min(1, 'Title must have more than 1 character'),
  content: z.string({ required_error: 'Content is required' }).min(1, 'Content must have more than 1 character')
});

router.get('/', async (_: Request, res: Response) => {
  res.send(await service.getAll());
});

router.post('/', async (req: Request, res: Response) => {
  const validation = schema.safeParse(req.body);
  if (!validation.success) return res.status(400).send(validation.error.errors[0].message);

  const { title, content } = req.body;

  const post = await service.create(title, content);

  res.send(post);
});

export default router;