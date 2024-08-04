
import { Router, Request, Response } from 'express';

const router = Router();

interface Post {
  id: number;
  title: string;
  content: string;
}

const posts: Post[] = [
  { id: 1, title: 'Title 1', content: "A long message" },
  { id: 2, title: 'Title 2', content: "A long message" },
  { id: 3, title: 'Title 3', content: "A long message" },
  { id: 4, title: 'Title 4', content: "A long message" },
];

router.get('/', (_: Request, res: Response) => {
  res.send(posts);
});

router.post('/', (req: Request, res: Response) => {
  const { title, content } = req.body;

  const newPost = { id: posts.length, title, content };
  posts.push(newPost);

  res.send(posts);
});

export default router;