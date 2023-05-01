import app from ".";
import * as dotenv from "dotenv";

dotenv.config();
const PORT = process.env.API_PORT || 9443;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
