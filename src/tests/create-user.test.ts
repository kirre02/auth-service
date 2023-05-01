import app from "../index";
import request from "supertest";
import testUser from "../types/testModels";

describe("create user", () => {
  it("should create a new user", async () => {
    const newUser: testUser = {
      username: "Elliot",
      email: "elliot@test.io",
      password: "password1234",
    };

    const res = await request(app)
      .post("/user/create")
      .send(newUser)
      .expect(200);

    const resData = res.body;
    expect(resData).toBeDefined();
  });

  it("returns bad request if first name is missing", async () => {
    const failUser: testUser = {
      username: "",
      email: "john@test.io",
      password: "password",
    };
    const res = await request(app)
      .post("/user/create")
      .send(failUser)
      .expect(400);

    const resData = res.body;
    expect(resData).toBe("input or inputs are missing");
  });
});
