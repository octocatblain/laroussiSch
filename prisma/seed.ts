const { PrismaClient } = require("@prisma/client");
const products = require("../src/data/products.json"); // Import the JSON file
const productTypes = require("../src/data/productTypes.json"); // Import product types JSON
const productWeights = require("../src/data/productWeights.json"); // Import product weights JSON

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

  // Seed Product Types
  // console.log("Seeding product types...");
  // for (const type of productTypes) {
  //   await prisma.productType.create({
  //     data: {
  //       name: type.name,
  //       description: type.description,
  //       textId: type.textId,
  //     },
  //   });
  // }
  console.log("Product types seeded successfully.");

  // Seed Product Weights
  console.log("Seeding product weights...");
  for (const weight of productWeights) {
    await prisma.productWeight.create({
      data: {
        productId: weight.productId,
        weight: weight.weight,
        unit: weight.unit,
        textId: weight.textId,
      },
    });
  }
  console.log("Product weights seeded successfully.");

  // Seed Products
  console.log("Seeding products...");
  for (const product of products) {
    await prisma.product.create({
      data: {
        slug: product.slug,
        coverImage: product.coverImage,
        productName: product.productName,
        productType: product.productType,
        availability: product.availability,
        price: product.price,
        refiner: product.refiner,
        material: product.material,
        fineness: product.fineness,
        fineWeight: product.fineWeight,
        dimensions: product.dimensions,
        quality: product.quality,
        packaging: product.packaging,
        kinebar: product.kinebar,
        description: product.description,
        shots: product.shots,
      },
    });
  }
  console.log("Products seeded successfully.");
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
