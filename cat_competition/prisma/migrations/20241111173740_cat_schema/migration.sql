/*
  Warnings:

  - You are about to drop the column `subscriber_id` on the `Cats` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Cats" DROP CONSTRAINT "Cats_subscriber_id_fkey";

-- AlterTable
ALTER TABLE "Cats" DROP COLUMN "subscriber_id";
