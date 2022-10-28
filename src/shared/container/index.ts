import { SurveysRepository } from "@modules/survey/infra/typeorm/repositories/SurveysRepository";
import { ISurveysRepository } from "@modules/survey/repositories/ISurveysRepository";
import { UsersRepository } from "@modules/users/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { container } from "tsyringe";



container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)

container.registerSingleton<ISurveysRepository>(
    "SurveysRepository",
    SurveysRepository
)
