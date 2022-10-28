import { injectable, inject } from 'tsyringe';
import { AppError } from '../../../shared/errors/AppError';
import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../infra/typeorm/entities/User';
import { IUsersRepository } from '../repositories/IUsersRepository';


@injectable()
class CreateUserService {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }
    async execute({ name, email }: ICreateUserDTO): Promise<User> {
        const userAlreadyExists = await this.usersRepository.findByEmail(email);
        if (userAlreadyExists) {
            throw new AppError("User already Exists!");
        };
        const user =await this.usersRepository.create({
            name,
            email,
        });
        return user;
    };
};

export { CreateUserService };