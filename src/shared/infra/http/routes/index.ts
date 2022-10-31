import { Router } from 'express';
import { surveysRoutes } from './surveys.routes';
import { surveysUsersRoutes } from './surveysUsers.routes';
import { userRoutes } from './users.routes';


const router = Router();

router.use("/users", userRoutes);
router.use("/surveys", surveysRoutes);
router.use("/surveysUsers", surveysUsersRoutes);

export { router };