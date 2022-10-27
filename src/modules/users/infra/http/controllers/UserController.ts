import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../../typeorm/entities/User";


class UserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email } = request.body;
        const usersRepository = getRepository(User);
        const userExists = usersRepository.findOne({email});
        if(userExists) {
            return response.status(400).json({error: "User alread exists!"})
        }
        const user = usersRepository.create({ name, email })
        await usersRepository.save(user);
        return response.status(201).json(user);
    }

}

export { UserController }