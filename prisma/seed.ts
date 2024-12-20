const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: "testuser@gmail.com" },
    update: {},
    create: {
      email: "testuser@gmail.com",
      name: "Test User",
      image: "https://example.com/image.jpg",
    },
  });

  console.log({ user });

  const post = await prisma.post.create({
    data: {
      title: "My first post",
      content: "This is the content of my first post.",
      authorId: user.id,
    },
  });

  console.log({ post });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
