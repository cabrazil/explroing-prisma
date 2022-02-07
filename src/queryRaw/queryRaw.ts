import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.$queryRaw(Prisma.sql
    `SELECT * FROM modules`);

  console.log(result);
}

main();

