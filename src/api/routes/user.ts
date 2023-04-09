import { Router } from "express";
import userController from "../controllers/usercontroller";
import { checkJwt } from "../middlewares/checkJwt";

const r = Router();

// Get all users
r.get("/", checkJwt, userController.listAll);
