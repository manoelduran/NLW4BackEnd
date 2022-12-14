import { CreateUserService } from "@modules/users/services/CreateUser/CreateUserService";
import { Request, Response } from "express";
import { container } from "tsyringe";



class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email } = request.body;
        const createUserService = container.resolve(CreateUserService)
        const newUser = await createUserService.execute({ name, email });
        return response.status(201).json(newUser);
    }

}

export { CreateUserController }