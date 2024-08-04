import { Request, Response, NextFunction } from 'express';

const errorMiddleware = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);

  res.status(500).send('Something went wrong.');
}

export default errorMiddleware;