-- AlterTable
ALTER TABLE "Cart" ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL,
ALTER COLUMN "price" DROP NOT NULL,
ALTER COLUMN "price" DROP DEFAULT,
ALTER COLUMN "totalPrice" DROP NOT NULL,
ALTER COLUMN "totalPrice" DROP DEFAULT;