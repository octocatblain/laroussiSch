-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "coverImage" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "productType" TEXT NOT NULL,
    "availability" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "refiner" TEXT NOT NULL,
    "material" TEXT NOT NULL,
    "fineness" TEXT NOT NULL,
    "fineWeight" TEXT NOT NULL,
    "dimensions" TEXT NOT NULL,
    "quality" TEXT NOT NULL,
    "packaging" TEXT NOT NULL,
    "kinebar" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "shots" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");
