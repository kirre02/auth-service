import { Router } from "express"
import auth from "./auth"
import user from "./user"

const r = Router()

r.use("/auth", auth)
r.use("/user", user)

export default r;
