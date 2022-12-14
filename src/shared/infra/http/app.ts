import express, { NextFunction, Request, Response } from 'express';
import 'reflect-metadata';
import 'express-async-errors';
import "@shared/container";
import createConnection from '@shared/infra/typeorm';
import { router } from './routes';
import { AppError } from '@shared/errors/AppError';


createConnection();
const app = express();
app.use(express.json());
app.use(router);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            message: error.message
        });
    };
    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${error.message}`
    })
})

export { app}