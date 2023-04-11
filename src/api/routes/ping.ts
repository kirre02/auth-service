import { Router, Response, Request } from "express";

const r = Router();

r.get("/ping", (req: Request, res: Response) => {
  res.send("pong");
});

export default r;
