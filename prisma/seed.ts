import { Prisma } from "@prisma/client";
import { db } from "../src/utils/db";
import * as dotenv from "dotenv";
import e from "express";

dotenv.config();

async function main() {
  const root = await db.user.upsert({
    where: { email: "root@auth.io" },
    update: {},
    create: {
      email: "root@auth.io",
      userName: "root",
      password: process.env.ROOT_PASSWORD,
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
