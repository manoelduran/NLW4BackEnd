import { CreateSurveysController } from "@modules/survey/infra/http/controllers/CreateSurveysController";
import { Router } from "express";

const surveysRoutes = Router();

const createSurveysController = new CreateSurveysController();

surveysRoutes.post("/", createSurveysController.handle);

export { surveysRoutes };