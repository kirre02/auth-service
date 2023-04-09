import * as bp from "body-parser";
import * as express from "express";
import * as cookieParser from "cookie-parser";
import * as cors from "cors";
import * as dotenv from "dotenv";
import { Application } from "express";
import helmet from "helmet";

dotenv.config();

const app: Application = express();
const PORT = process.env.API_PORT;

// Call midlewares
app.use(cors());
app.use(helmet());
app.use(bp.json());
app.use(cookieParser());

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
