import { db } from "../src/utils/db";
import { Prisma } from "@prisma/client";
import * as dotenv from "dotenv";
import e from "express";
import { hashPw } from "../src/utils/hash";

dotenv.config();

const hashedPw = hashPw(process.env.ROOT_PASSWORD);

const userData: Prisma.UserCreateInput[] = [
  {
    email: "root@auth.io",
    userName: "root",
    password: hashedPw,
    isAdmin: true,
  },
  {
    email: "alice@user.io",
    userName: "alice",
    password: "alice1234!",
    isAdmin: false,
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of userData) {
    const user = await db.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
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
