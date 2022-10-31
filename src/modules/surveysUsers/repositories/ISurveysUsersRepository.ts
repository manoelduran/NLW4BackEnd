import { ICreateSurveysUsersDTO } from "@modules/surveysUsers/dto/ICreateSurveysUsersDTO";
import { SurveysUsers } from "@modules/surveysUsers/infra/typeorm/entities/SurveysUsers";


interface ISurveysUsersRepository {
    create({ survey_id, user_id, value }: ICreateSurveysUsersDTO): Promise<SurveysUsers>
}

export { ISurveysUsersRepository };