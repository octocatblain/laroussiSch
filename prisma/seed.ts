const { PrismaClient } = require("@prisma/client");
const fs = require("fs");
const path = require("path");

const prisma = new PrismaClient();

async function main() {
  // Define the base path for your JSON files
  const dataPath = path.join(__dirname, "data"); // Update this based on actual directory structure

  // Load JSON files
  const storageLocations = JSON.parse(
    fs.readFileSync(path.join(dataPath, "storageLocations.json"), "utf-8")
  );
  const productTypes = JSON.parse(
    fs.readFileSync(path.join(dataPath, "productTypes.json"), "utf-8")
  );
  const products = JSON.parse(
    fs.readFileSync(path.join(dataPath, "products.json"), "utf-8")
  ); // Includes unique IDs
  const productWeights = JSON.parse(
    fs.readFileSync(path.join(dataPath, "productWeights.json"), "utf-8")
  );
  // const productStorageLocations = JSON.parse(
  //   fs.readFileSync(path.join(dataPath, "productStorageLocations.json"), "utf-8")
  // );

  // Seed storage locations
  console.log("Seeding storage locations...");
  const existingStorageLocations = await prisma.storageLocation.count();
  if (existingStorageLocations === 0) {
    await prisma.storageLocation.createMany({ data: storageLocations });
    console.log("Storage locations seeded.");
  } else {
    console.log("Storage locations already seeded.");
  }

  // Seed product types
  console.log("Seeding product types...");
  const existingProductTypes = await prisma.productType.count();
  if (existingProductTypes === 0) {
    await prisma.productType.createMany({ data: productTypes });
    console.log("Product types seeded.");
  } else {
    console.log("Product types already seeded.");
  }

  // Seed products
  console.log("Seeding products...");
  const existingProducts = await prisma.product.count();
  if (existingProducts === 0) {
    await prisma.product.createMany({ data: products });
    console.log("Products seeded.");
  } else {
    console.log("Products already seeded.");
  }

  // Seed product weights
  // Seed product weights
  console.log("Seeding product weights...");
  const existingWeights = await prisma.productWeight.count();

  if (existingWeights === 0) {
    for (const weight of productWeights) {
      try {
        await prisma.productWeight.create({
          data: weight,
        });
        console.log(
          `Product weight for product ID ${weight.productId} seeded.`
        );
      } catch (error) {
        console.error(
          `Failed to seed product weight for product ID ${weight.productId}: ${error.message}`
        );
      }
    }
    console.log("Product weights seeded.");
  } else {
    console.log("Product weights already seeded.");
  }
}
  // Seed product storage locations (many-to-many relationship)
  //   console.log("Seeding product storage locations...");
  //   const existingProductStorageLocations =
  //     await prisma.productStorageLocation.count();
  //   if (existingProductStorageLocations === 0) {
  //     for (const relation of productStorageLocations) {
  //       const { productId, storageLocationId } = relation;

  //       // Validate that the referenced product and storage location exist
  //       const existingProduct = await prisma.product.findUnique({
  //         where: { id: productId },
  //       });
  //       const existingStorageLocation = await prisma.storageLocation.findUnique({
  //         where: { id: storageLocationId },
  //       });

  //       if (!existingProduct) {
  //         console.error(
  //           `Product with ID ${productId} does not exist in the database.`
  //         );
  //         continue;
  //       }

  //       if (!existingStorageLocation) {
  //         console.error(
  //           `Storage location with ID ${storageLocationId} does not exist in the database.`
  //         );
  //         continue;
  //       }

  //       await prisma.productStorageLocation.create({ data: relation });
  //     }
  //     console.log("Product storage locations seeded.");
  //   } else {
  //     console.log("Product storage locations already seeded.");
  //   }
  // }

  
// Seed the database
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

// main()
//   .then(() => prisma.$disconnect())
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });