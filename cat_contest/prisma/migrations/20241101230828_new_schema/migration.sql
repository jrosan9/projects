/*
  Warnings:

  - You are about to drop the column `email` on the `Subscribers` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Subscribers` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Subscribers` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `Subscribers` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[subscriber_email]` on the table `Subscribers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `subscriber_email` to the `Subscribers` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Subscribers_email_key";

-- DropIndex
DROP INDEX "Subscribers_phoneNumber_key";

-- AlterTable
ALTER TABLE "Subscribers" DROP COLUMN "email",
DROP COLUMN "lastName",
DROP COLUMN "name",
DROP COLUMN "phoneNumber",
ADD COLUMN     "subscriber_email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Subscribers_subscriber_email_key" ON "Subscribers"("subscriber_email");
