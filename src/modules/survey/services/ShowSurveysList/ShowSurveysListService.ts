import { Survey } from "@modules/survey/infra/typeorm/entities/Survey";
import { ISurveysRepository } from "@modules/survey/repositories/ISurveysRepository";
import { inject, injectable } from "tsyringe";


@injectable()
class ShowSurveysListService {
    constructor(
        @inject("SurveysRepository")
        private surveysRepository: ISurveysRepository
    ) { }
    async execute(): Promise<Survey[]> {
        const list = await this.surveysRepository.show();
        return list;
    };
};

export {
    ShowSurveysListService
};