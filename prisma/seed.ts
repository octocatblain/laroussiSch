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
  const addressTypes = JSON.parse(
    fs.readFileSync(path.join(dataPath, "addressType.json"), "utf-8")
  );
  const paymentMethods = JSON.parse(
    fs.readFileSync(path.join(dataPath, "paymentMethod.json"), "utf-8")
  );

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

  // seed addres types and payment methods
  // Seed payment types
  console.log("Seeding payment methods...");
  const existingPaymentMethods = await prisma.paymentMethod.count();

  if (existingPaymentMethods === 0) {
    for (const paymentMethod of paymentMethods) {
      try {
        await prisma.paymentMethod.create({
          data: paymentMethod,
        });
        console.log(`Payment method '${paymentMethod.method}' seeded.`);
      } catch (error) {
        console.error(
          `Failed to seed payment method '${paymentMethod.method}': ${error.message}`
        );
      }
    }
    console.log("Payment methods seeded.");
  } else {
    console.log("Payment methods already seeded.");
  }

  // Seed address types
  console.log("Seeding address types...");
  const existingAddressTypes = await prisma.addressType.count();

  if (existingAddressTypes === 0) {
    for (const addressType of addressTypes) {
      try {
        await prisma.addressType.create({
          data: addressType,
        });
        console.log(`Address type '${addressType.type}' seeded.`);
      } catch (error) {
        console.error(
          `Failed to seed address type '${addressType.type}': ${error.message}`
        );
      }
    }
    console.log("Address types seeded.");
  } else {
    console.log("Address types already seeded.");
  }
}
// Seed the database
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
