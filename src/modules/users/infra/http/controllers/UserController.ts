import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserService } from "../../../services/CreateUserService";


class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email } = request.body;
        const createUserService = container.resolve(CreateUserService)
        await createUserService.execute({ name, email });
        return response.status(201).send();
    }

}

export { CreateUserController }