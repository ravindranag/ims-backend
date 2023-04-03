-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('Placed', 'Processed', 'Delivered');

-- CreateTable
CREATE TABLE "User" (
    "id" INT4 NOT NULL DEFAULT unique_rowid(),
    "email" STRING NOT NULL,
    "password" STRING NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" INT4 NOT NULL DEFAULT unique_rowid(),
    "name" STRING NOT NULL,
    "userId" INT4 NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Seller" (
    "id" INT4 NOT NULL DEFAULT unique_rowid(),
    "name" STRING NOT NULL,
    "userId" INT4 NOT NULL,

    CONSTRAINT "Seller_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" INT4 NOT NULL DEFAULT unique_rowid(),
    "name" STRING NOT NULL,
    "address" STRING NOT NULL,
    "userId" INT4 NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" INT4 NOT NULL DEFAULT unique_rowid(),
    "name" STRING NOT NULL,
    "description" STRING,
    "price" FLOAT8 NOT NULL,
    "quantity" INT4 NOT NULL,
    "sellerId" INT4 NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductOrder" (
    "id" INT4 NOT NULL DEFAULT unique_rowid(),
    "quantity" INT4 NOT NULL,
    "amount" FLOAT8 NOT NULL,
    "customerId" INT4 NOT NULL,
    "status" "OrderStatus" NOT NULL DEFAULT 'Placed',
    "productId" INT4 NOT NULL,

    CONSTRAINT "ProductOrder_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_userId_key" ON "Admin"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Seller_userId_key" ON "Seller"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_userId_key" ON "Customer"("userId");

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seller" ADD CONSTRAINT "Seller_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductOrder" ADD CONSTRAINT "ProductOrder_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductOrder" ADD CONSTRAINT "ProductOrder_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
