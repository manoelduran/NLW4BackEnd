import { CreateSurveysService } from "@modules/survey/services/CreateSurveys/CreateSurveysService";
import { Request, Response } from "express";
import { container } from "tsyringe";



class CreateSurveysController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { title, description } = request.body;
        const createSurveysService = container.resolve(CreateSurveysService);
        const survey = await createSurveysService.execute({ title, description });
        return response.status(201).json(survey);
    }
}

export { CreateSurveysController };