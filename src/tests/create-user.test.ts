import app from "../index";
import { db } from "../utils/db";
import request from "supertest";
describe("Example Test", () => {
  beforeAll(async () => {
    await db.$connect();
  });

  afterAll(async () => {
    await db.$disconnect();
  });

  it("should create a new user", async () => {
    const newUser = {
      name: "John",
      email: "johndoe@example.com",
      password: "password",
    };

    const res = await request(app)
      .post("/user/create")
      .send(newUser)
      .expect(200);

    const resData = res.body;
    expect(resData).toBeDefined();
  });
});
