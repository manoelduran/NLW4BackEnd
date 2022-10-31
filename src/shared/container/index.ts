import { SurveysRepository } from "@modules/survey/infra/typeorm/repositories/SurveysRepository";
import { ISurveysRepository } from "@modules/survey/repositories/ISurveysRepository";
import { SurveysUsersRepository } from "@modules/surveysUsers/infra/typeorm/repositories/SurveysUsersRepository";
import { ISurveysUsersRepository } from "@modules/surveysUsers/repositories/ISurveysUsersRepository";
import { UsersRepository } from "@modules/users/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { container } from "tsyringe";
import "@shared/container/providers";



container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)

container.registerSingleton<ISurveysRepository>(
    "SurveysRepository",
    SurveysRepository
)

container.registerSingleton<ISurveysUsersRepository>(
    "SurveysUsersRepository",
    SurveysUsersRepository
)