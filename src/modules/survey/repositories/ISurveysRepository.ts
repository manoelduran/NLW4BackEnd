import { ICreateSurveyDTO } from "@modules/survey/dto/ICreateSurveyDTO";
import { Survey } from "@modules/survey/infra/typeorm/entities/Survey";


interface ISurveysRepository {
    create({ title, description }: ICreateSurveyDTO): Promise<Survey>;
    findById(id: string): Promise<Survey>;
    findByTitle(title: string): Promise<Survey>;
    show(): Promise<Survey[]>;
};

export { ISurveysRepository };