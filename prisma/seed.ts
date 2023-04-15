import { db } from "../src/utils/db";
import * as dotenv from "dotenv";
import e from "express";
import { hashPw } from "../src/utils/hash";

dotenv.config();

const hashedPw = hashPw(process.env.ROOT_PASSWORD)


async function main() {
  const root = await db.user.upsert({
    where: { email: "root@auth.io" },
    update: {},
    create: {
      email: "root@auth.io",
      userName: "root",
      password: hashedPw,
      isAdmin: true,
    },
  });

  console.log({ root });
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async () => {
    console.error(e);
    await db.$connect();
    process.exit(1);
  });
