import { db } from "../utils/db";

afterEach(async () => {
  await db.user.deleteMany({});
});
