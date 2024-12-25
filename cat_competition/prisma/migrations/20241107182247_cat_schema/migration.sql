-- CreateTable
CREATE TABLE "Subscribers" (
    "id" SERIAL NOT NULL,
    "subscriber_name" TEXT NOT NULL,
    "subscriber_LastName" TEXT NOT NULL,
    "subscriber_email" TEXT NOT NULL,
    "subscriber_PhoneNumber" TEXT NOT NULL,

    CONSTRAINT "Subscribers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cats" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Cats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Subscribers_subscriber_email_key" ON "Subscribers"("subscriber_email");

-- CreateIndex
CREATE UNIQUE INDEX "Subscribers_subscriber_PhoneNumber_key" ON "Subscribers"("subscriber_PhoneNumber");
