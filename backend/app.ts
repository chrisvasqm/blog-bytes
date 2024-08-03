import cors from 'cors';
import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import helmet from 'helmet';

const app = express();

app.use(express.json({ limit: '5mb' }));
app.use(cors());
app.use(helmet());

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);

  res.status(500).send('Something went wrong.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`));