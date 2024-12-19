const { PrismaClient }: any = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // Upsert User
  const user = await prisma.user.upsert({
    where: { email: "testuser@gmail.com" },
    update: { username: "testuser" },
    create: {
      email: "testuser@gmail.com",
      name: "Test User",
      image:
        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      hashedPassword: "hashedpassword123", // Example hashed password
    },
  });

  console.log("User seeded:", user);
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
