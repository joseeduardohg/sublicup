/*
  Warnings:

  - You are about to drop the column `precio` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "precio",
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL DEFAULT 0;
