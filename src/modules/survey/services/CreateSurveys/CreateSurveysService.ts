import { ICreateSurveyDTO } from "@modules/survey/dto/ICreateSurveyDTO";
import { Survey } from "@modules/survey/infra/typeorm/entities/Survey";
import { ISurveysRepository } from "@modules/survey/repositories/ISurveysRepository";
import { inject, injectable } from "tsyringe";


@injectable()
class CreateSurveysService {
    constructor(
        @inject("SurveysRepository")
        private surveys: ISurveysRepository
    ) { }
    async execute({ title, description }: ICreateSurveyDTO): Promise<Survey> {
        const newSurvey = this.surveys.create({ title, description });
        return newSurvey;
    }
}

export { CreateSurveysService }