import * as bp from "body-parser";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import { Application } from "express";
import helmet from "helmet";
import r from "./api/routes";

dotenv.config();

const app: Application = express();

// Call midlewares
app.use(cors());
app.use(helmet());
app.use(bp.json());
app.use(cookieParser());

//set all the routes from routes folder
app.use("/", r);

export default app;
