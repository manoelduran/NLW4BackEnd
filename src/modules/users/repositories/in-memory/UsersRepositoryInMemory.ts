import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO";
import { User } from "@modules/users/infra/typeorm/entities/User";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";


class UsersRepositoryInMemory implements IUsersRepository {
    users: User[] = [];
    async create({ email, name }: ICreateUserDTO): Promise<User> {
        const newUser = new User();
        Object.assign(newUser, {
            email,
            name
        });
        this.users.push(newUser);
        return newUser;
    }
    async findById(id: string): Promise<User> {
        const selectedUser = this.users.find(user => user.id === id);
        return selectedUser;
    }
    async findByEmail(email: string): Promise<User> {
        const selectedUser = this.users.find(user => user.email === email);
        return selectedUser;
    }
    async findByName(name: string): Promise<User> {
        const selectedUser = this.users.find(user => user.name === name);
        return selectedUser;
    }

}

export { UsersRepositoryInMemory };