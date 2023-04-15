import { Router, Response, Request } from "express";

const r = Router();

r.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "pong",
  });
});

export default r;
