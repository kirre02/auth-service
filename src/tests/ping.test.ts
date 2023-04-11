import request from "supertest";
import app from "../src/index";

describe("Ping Endpoint Test", () => {
  it("should return pong", async () => {
    const res = await request(app).get("/ping");
    expect(res.status).toEqual(200);
    expect(res.text).toEqual("pong");
  });
});
