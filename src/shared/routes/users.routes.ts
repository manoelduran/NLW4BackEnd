import { Router } from "express";
import { CreateUserController } from "../../modules/users/infra/http/controllers/UserController";

const userRoutes = Router();

const createUserController = new CreateUserController();

userRoutes.post("/", createUserController.handle);

export {userRoutes};