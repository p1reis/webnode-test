-- CreateEnum
CREATE TYPE "ItemStatusEnum" AS ENUM ('OUT_OF_STOCK', 'IN_STOCK');

-- CreateEnum
CREATE TYPE "OrderStatusEnum" AS ENUM ('PROCESSING', 'APPROVED', 'SHIPPED', 'DELIVERED', 'CANCELED', 'REFUNDED');

-- CreateEnum
CREATE TYPE "CurrencyEnum" AS ENUM ('EUR', 'CZK', 'BRL', 'USD');

-- CreateTable
CREATE TABLE "items" (
    "id" SERIAL NOT NULL,
    "cuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "status" "ItemStatusEnum" NOT NULL DEFAULT 'IN_STOCK',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ordersCuid" TEXT,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "cuid" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "currency" "CurrencyEnum" NOT NULL,
    "status" "OrderStatusEnum" NOT NULL DEFAULT 'PROCESSING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "items_cuid_key" ON "items"("cuid");

-- CreateIndex
CREATE UNIQUE INDEX "orders_cuid_key" ON "orders"("cuid");

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_ordersCuid_fkey" FOREIGN KEY ("ordersCuid") REFERENCES "orders"("cuid") ON DELETE SET NULL ON UPDATE CASCADE;
