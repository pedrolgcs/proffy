import express, { json, Request, Response, NextFunction } from 'express';
import cors from 'cors';

import 'express-async-errors';

import AppError from '@shared/errors/AppError';

import routes from './routes';

const app = express();

// middleware
app.use(json());
app.use(cors());

// routes
app.use(routes);

// global error
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server Error',
  });
});

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
