import { Router } from "express";
import auth from "./auth";
import user from "./user";
import ping from "./ping";

const r = Router();

r.use("/auth", auth);
r.use("/user", user);
r.use("/ping", ping);

export default r;
