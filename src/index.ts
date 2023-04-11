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
const PORT = process.env.API_PORT || 9443;

// Call midlewares
app.use(cors());
app.use(helmet());
app.use(bp.json());
app.use(cookieParser());

//set all the routes from routes folder
app.use("/", r);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});

export default app;
