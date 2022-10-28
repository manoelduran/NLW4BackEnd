import { getRepository, Repository } from 'typeorm';
import { ICreateUserDTO } from '../../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../../repositories/IUsersRepository';
import { User } from '../entities/User';

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;
    constructor() {
        this.repository = getRepository(User)
    }
    async create({  name, email}: ICreateUserDTO): Promise<User> {
        const newUser = this.repository.create({
            name,
            email
        });
        await this.repository.save(newUser);
        return newUser;
    };
    async findById(id: string): Promise<User> {
        const user = this.repository.findOne(id);
        return user;
    };
    async findByEmail(email: string): Promise<User> {
        const user = this.repository.findOne({ email });
        return user;
    };
    async findByName(name: string): Promise<User> {
        const user = this.repository.findOne({ name });
        return user;
    };
}

export { UsersRepository }