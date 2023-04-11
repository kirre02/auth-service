import app from "../src/index";
import { db } from "../src/utils/db";
import request from "supertest";
describe("Example Test", () => {
  beforeAll(async () => {
    await db.$connect();
  });

  afterAll(async () => {
    await db.$disconnect();
  });

  it("should create a new user", async () => {
    const res = await request(app).post("/users").send({
      name: "John Doe",
      email: "johndoe@example.com",
      password: "password",
    });

    expect(res.status).toEqual(201);
    expect(res.body.name).toEqual("John Doe");
    expect(res.body.email).toEqual("johndoe@example.com");
  });
});
