import { injectable, inject } from 'tsyringe';
import { AppError } from '../../../shared/errors/AppError';
import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { IUsersRepository } from '../repositories/IUsersRepository';


@injectable()
class CreateUserService {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }
    async execute({ name, email }: ICreateUserDTO): Promise<void> {
        const userAlreadyExists = await this.usersRepository.findByEmail(email);
        if (userAlreadyExists) {
            throw new AppError("User already Exists!");
        };
        await this.usersRepository.create({
            name,
            email,
        });
    };
};

export { CreateUserService };