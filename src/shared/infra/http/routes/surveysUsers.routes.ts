import { SendMailController } from "@modules/surveysUsers/infra/http/controllers/SendMailController";
import { Router } from "express";

const surveysUsersRoutes = Router();

const sendMailController = new SendMailController()

surveysUsersRoutes.post("/", sendMailController.handle);

export {surveysUsersRoutes};