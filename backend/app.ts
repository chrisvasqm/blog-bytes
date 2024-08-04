import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import helmet from 'helmet';
import postsRouter from './routes/posts';
import errorMiddleware from './middlewares/errorMiddleware';

const app = express();

app.use(express.json({ limit: '5mb' }));
app.use(cors());
app.use(helmet());

app.use('/api/posts', postsRouter);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`));