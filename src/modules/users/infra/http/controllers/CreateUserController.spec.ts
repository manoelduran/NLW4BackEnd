import { app } from "@shared/infra/http/app";
import request from "supertest";
import { v4 as uuid } from 'uuid';
import createConnection from "@shared/infra/typeorm";
import { Connection } from "typeorm";

let connection: Connection;

describe("Create User Controller", () => {
    beforeAll(async () => {
        connection = await createConnection();
        await connection.runMigrations();
    });
    afterAll(async () => {
        await connection.dropDatabase();
        await connection.close();
    });
    it("Should be able to create a new user", async () => {
        const response = await await request(app).post("/users").send({
            email: "manoel.duran@hotmail.com",
            name: "Manoel Duran"
        });
        console.log('response', response)
        expect(response.status).toBe(201);
    });
    it("Should not be able to create a new user with the same email", async () => {
        const response = await await request(app).post("/users").send({
            email: "manoel.duran@hotmail.com",
            name: "Manoel Duran"
        });
        console.log('response', response)
        expect(response.status).toBe(400);
    });
});