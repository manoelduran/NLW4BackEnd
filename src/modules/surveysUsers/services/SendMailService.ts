import { injectable, inject } from "tsyringe";
import { SurveysUsers } from "@modules/surveysUsers/infra/typeorm/entities/SurveysUsers";
import { ISurveysUsersRepository } from "../repositories/ISurveysUsersRepository";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { ISurveysRepository } from "@modules/survey/repositories/ISurveysRepository";
import { AppError } from "@shared/errors/AppError";
import { IMailProvider } from "@shared/container/providers/MailProvider/IMailProvider";
import { resolve } from "path";

interface IRequest {
    email: string;
    survey_id: string;
    value?: number | null;
}

@injectable()
class SendMailService {
    constructor(
        @inject("SurveysUsersRepository")
        private surveysUsersRepository: ISurveysUsersRepository,
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
        @inject("SurveysRepository")
        private surveysRepository: ISurveysRepository,
        @inject("MailProvider")
        private etherealMailProvider: IMailProvider
    ) { }
    async execute({ email, survey_id }: IRequest): Promise<SurveysUsers> {
        const usersAlreadyExists = await this.usersRepository.findByEmail(email);
        const templatePath = resolve(__dirname, "..", "views", "emails", "forgotPassword.hbs");
        if (!usersAlreadyExists) {
            throw new AppError("This user doesn't exists! Try another one!")
        };
        const surveysAlreadyExists = await this.surveysRepository.findById(survey_id);
        if (!surveysAlreadyExists) {
            throw new AppError("This survey doesn't exists!");
        };

        const newSurveysUsers = await this.surveysUsersRepository.create({
            survey_id,
            user_id: usersAlreadyExists.id,
        });
        const variables = {
            name: usersAlreadyExists.name,
            link: "http://localhost:3333/surveysUsers"
        }
        await this.etherealMailProvider.sendMail(
            email,
            "Avalie nosso atendimento",
            variables,
            templatePath
        )
        return newSurveysUsers;
    };
};

export { SendMailService };