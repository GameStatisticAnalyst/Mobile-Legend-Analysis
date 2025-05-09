import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("123456", 10);

  await prisma.user.create({
    data: {
      email: "admin@test.com",
      name: "Admin",
      password: hashedPassword,
      role: "admin",
    },
  });

  console.log("✅ Admin user created!");
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
