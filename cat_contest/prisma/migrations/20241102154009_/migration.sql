/*
  Warnings:

  - A unique constraint covering the columns `[phone_number]` on the table `Cats` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Cats` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Cats_phone_number_key" ON "Cats"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "Cats_email_key" ON "Cats"("email");
