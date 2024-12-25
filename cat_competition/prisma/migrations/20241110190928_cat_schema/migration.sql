/*
  Warnings:

  - You are about to drop the column `email` on the `Cats` table. All the data in the column will be lost.
  - You are about to drop the column `phone_number` on the `Cats` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Cats" DROP COLUMN "email",
DROP COLUMN "phone_number";
