import { ICreateSurveyDTO } from "@modules/survey/dto/ICreateSurveyDTO";
import { ISurveysRepository } from "@modules/survey/repositories/ISurveysRepository";
import { Survey } from "@modules/survey/infra/typeorm/entities/Survey";
import { getRepository, Repository } from "typeorm";


class SurveysRepository implements ISurveysRepository {
    private repository: Repository<Survey>;
    constructor() {
        this.repository = getRepository(Survey);
    }
    async create({ title, description }: ICreateSurveyDTO): Promise<Survey> {
        const newSurvey = this.repository.create({
            title,
            description
        });
        await this.repository.save(newSurvey);
        return newSurvey
    };
    findById(id: string): Promise<Survey> {
        return this.repository.findOne(id);
    };
    findByTitle(title: string): Promise<Survey> {
        return this.repository.findOne({ title });
    };
    show(): Promise<Survey[]> {
        return this.repository.find();
    }
};

export { SurveysRepository };