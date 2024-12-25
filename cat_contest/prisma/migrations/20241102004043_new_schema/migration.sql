/*
  Warnings:

  - A unique constraint covering the columns `[subscriber_PhoneNumber]` on the table `Subscribers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `subscriber_LastName` to the `Subscribers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subscriber_PhoneNumber` to the `Subscribers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subscriber_name` to the `Subscribers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subscriber_number` to the `Subscribers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Subscribers" ADD COLUMN     "subscriber_LastName" TEXT NOT NULL,
ADD COLUMN     "subscriber_PhoneNumber" TEXT NOT NULL,
ADD COLUMN     "subscriber_name" TEXT NOT NULL,
ADD COLUMN     "subscriber_number" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Subscribers_subscriber_PhoneNumber_key" ON "Subscribers"("subscriber_PhoneNumber");
