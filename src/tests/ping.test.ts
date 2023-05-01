import request from "supertest";
import app from "../index";

describe("Ping Endpoint Test", () => {
  it("should return pong", async () => {
    const res = await request(app).get("/ping");
    expect(res.body).toEqual({ message: "pong" });
  });
});
