import { Router } from "express";
import authController from "../controllers/authcontrollers";
import { checkJwt } from "../middlewares/checkJwt";

const r = Router();

//login route
r.post("/login", authController.login);
r.post("/change-password", [checkJwt], authController.changePassword);

export default r;
