import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO';
import { User } from "@modules/users/infra/typeorm/entities/User";

interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<User>;
    findById(id: string): Promise<User>;
    findByEmail(email: string): Promise<User>;
    findByName(name: string): Promise<User>;
}

export { IUsersRepository }