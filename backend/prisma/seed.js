const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash("Admin123*", 10);

  const admin = await prisma.user.upsert({
    where: {
      email: "admin@qalab.local",
    },
    update: {},
    create: {
      name: "Administrador QALab",
      email: "admin@qalab.local",
      passwordHash,
      role: "ADMIN",
      isActive: true,
    },
  });

  console.log("Usuario administrador creado:");
  console.log({
    id: admin.id,
    name: admin.name,
    email: admin.email,
    role: admin.role,
  });
}

main()
  .catch((error) => {
    console.error("Error ejecutando seed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });