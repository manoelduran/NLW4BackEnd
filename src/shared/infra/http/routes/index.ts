import { Router } from 'express';
import { surveysRoutes } from './surveys.routes';
import { userRoutes } from './users.routes';


const router = Router();

router.use("/users", userRoutes);
router.use("/surveys", surveysRoutes);

export { router };