import { CreateUserController } from "@modules/users/infra/http/controllers/CreateUserController";
import { Router } from "express";

const userRoutes = Router();

const createUserController = new CreateUserController();

userRoutes.post("/", createUserController.handle);

export {userRoutes};