-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_productTypeId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_productWeightId_fkey";

-- DropForeignKey
ALTER TABLE "ProductStorageLocation" DROP CONSTRAINT "ProductStorageLocation_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductStorageLocation" DROP CONSTRAINT "ProductStorageLocation_storageLocationId_fkey";

-- DropForeignKey
ALTER TABLE "StorageBooking" DROP CONSTRAINT "StorageBooking_storageLocationId_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "productType" TEXT,
ADD COLUMN     "productWeight" TEXT,
ALTER COLUMN "productTypeId" DROP NOT NULL,
ALTER COLUMN "productWeightId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ProductStorageLocation" ALTER COLUMN "productId" DROP NOT NULL,
ALTER COLUMN "storageLocationId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "StorageBooking" ALTER COLUMN "storageLocationId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_productTypeId_fkey" FOREIGN KEY ("productTypeId") REFERENCES "ProductType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_productWeightId_fkey" FOREIGN KEY ("productWeightId") REFERENCES "ProductWeight"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductStorageLocation" ADD CONSTRAINT "ProductStorageLocation_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductStorageLocation" ADD CONSTRAINT "ProductStorageLocation_storageLocationId_fkey" FOREIGN KEY ("storageLocationId") REFERENCES "StorageLocation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorageBooking" ADD CONSTRAINT "StorageBooking_storageLocationId_fkey" FOREIGN KEY ("storageLocationId") REFERENCES "StorageLocation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
