/*
  Warnings:

  - You are about to drop the column `storageLocationId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `ProductWeight` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `StorageLocation` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `productWeightId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_storageLocationId_fkey";

-- DropForeignKey
ALTER TABLE "ProductWeight" DROP CONSTRAINT "ProductWeight_productId_fkey";

-- DropIndex
DROP INDEX "ProductType_name_idx";

-- DropIndex
DROP INDEX "ProductWeight_productId_idx";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "storageLocationId",
ADD COLUMN     "productWeightId" TEXT NOT NULL,
ALTER COLUMN "coverImage" DROP NOT NULL,
ALTER COLUMN "refiner" DROP NOT NULL,
ALTER COLUMN "material" DROP NOT NULL,
ALTER COLUMN "fineness" DROP NOT NULL,
ALTER COLUMN "fineWeight" DROP NOT NULL,
ALTER COLUMN "dimensions" DROP NOT NULL,
ALTER COLUMN "quality" DROP NOT NULL,
ALTER COLUMN "packaging" DROP NOT NULL,
ALTER COLUMN "kinebar" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ProductWeight" DROP COLUMN "productId";

-- CreateTable
CREATE TABLE "ProductStorageLocation" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "storageLocationId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductStorageLocation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductStorageLocation_productId_storageLocationId_key" ON "ProductStorageLocation"("productId", "storageLocationId");

-- CreateIndex
CREATE UNIQUE INDEX "StorageLocation_name_key" ON "StorageLocation"("name");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_productWeightId_fkey" FOREIGN KEY ("productWeightId") REFERENCES "ProductWeight"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductStorageLocation" ADD CONSTRAINT "ProductStorageLocation_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductStorageLocation" ADD CONSTRAINT "ProductStorageLocation_storageLocationId_fkey" FOREIGN KEY ("storageLocationId") REFERENCES "StorageLocation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
