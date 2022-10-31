import { getRepository, Repository } from "typeorm";
import { SurveysUsers } from "@modules/surveysUsers/infra/typeorm/entities/SurveysUsers";
import { ICreateSurveysUsersDTO } from "@modules/surveysUsers/dto/ICreateSurveysUsersDTO";
import { ISurveysUsersRepository } from "@modules/surveysUsers/repositories/ISurveysUsersRepository";


class SurveysUsersRepository implements ISurveysUsersRepository {
    private repository: Repository<SurveysUsers>;
    constructor() {
        this.repository = getRepository(SurveysUsers);
    }
    async create({ survey_id, user_id, value, id, created_at }: ICreateSurveysUsersDTO): Promise<SurveysUsers> {
        const newSurveysUsers = this.repository.create({
            id,
            created_at,
            survey_id,
            user_id,
            value
        });
        await this.repository.save(newSurveysUsers);
        return newSurveysUsers;
    }
    ;

}

export { SurveysUsersRepository };