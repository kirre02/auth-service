import request from "supertest";
import app from "../index";
import * as dotenv from "dotenv";

dotenv.config();

describe("login a user", () => {
  it("should return token when valid credentials are provided", async () => {
    const res = await request(app)
      .post("/auth/login")
      .send({
        email: "johndoe@user.io",
        password: "password123",
      })
      .expect(200);

    expect(res.body.token).toBeDefined();
  });
});
