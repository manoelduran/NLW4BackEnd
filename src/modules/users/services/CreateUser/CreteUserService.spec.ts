import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "@modules/users/repositories/in-memory/UsersRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateUserService } from "./CreateUserService"


let createUserService: CreateUserService;
let usersRepositoryInMemory: UsersRepositoryInMemory;
describe("Create User", () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        createUserService = new CreateUserService(usersRepositoryInMemory);
    });
    it("Should be able to create a user", async () => {
        const newUser: ICreateUserDTO = {
            email: "manoel.duran@hotmail.com",
            name: "Manoel Duran",
        };
        const createdUser = await createUserService.execute(newUser);
        expect(createdUser).toHaveProperty("id");
    });
    it("Should not be able to create a user with the same email", async () => {
        await createUserService.execute({
            email: "manoel.duran@hotmail.com",
            name: "Manoel Duran"
        });
        await expect(createUserService.execute({
            email: "manoel.duran@hotmail.com",
            name: "Manoel Duran"
        })).rejects.toEqual(new AppError("User already Exists!"))
    })
})