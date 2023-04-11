import { Router } from "express";
import userController from "../controllers/usercontroller";
import { checkJwt } from "../middlewares/checkJwt";

const r = Router();

// Get all users
r.get("/", [checkJwt], userController.listAll);

// Get one user
r.get(
  "/:uuid([a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12})",
  [checkJwt],
  userController.getById
);

//Create a new user
r.post("/", [checkJwt], userController.createUser);

export default r;
