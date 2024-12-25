/*
  Warnings:

  - Added the required column `subscriber_id` to the `Cats` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cats" ADD COLUMN     "subscriber_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Cats" ADD CONSTRAINT "Cats_subscriber_id_fkey" FOREIGN KEY ("subscriber_id") REFERENCES "Subscribers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
