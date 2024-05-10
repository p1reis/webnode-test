/*
  Warnings:

  - A unique constraint covering the columns `[number]` on the table `orders` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "orders" ALTER COLUMN "number" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "orders_number_key" ON "orders"("number");
