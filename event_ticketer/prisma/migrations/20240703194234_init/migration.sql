-- CreateTable
CREATE TABLE "Events" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "event_type" TEXT NOT NULL,
    "date" TEXT,
    "time" TEXT NOT NULL,
    "info" TEXT NOT NULL,
    "price_range" DECIMAL(65,30) NOT NULL,
    "headliner_image" TEXT NOT NULL,
    "category_id" INTEGER NOT NULL,
    "venue_id" INTEGER NOT NULL,

    CONSTRAINT "Events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Venues" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "seating_arrangement_img" TEXT NOT NULL,
    "ticket_availability" INTEGER NOT NULL,
    "seat_capacity" INTEGER NOT NULL,

    CONSTRAINT "Venues_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer_Account" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Customer_Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Orders" (
    "id" SERIAL NOT NULL,
    "total" DECIMAL(65,30) NOT NULL,
    "ticket_id" INTEGER NOT NULL,
    "customer_id" INTEGER NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tickets" (
    "id" SERIAL NOT NULL,
    "ticket_type" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "event_id" INTEGER NOT NULL,

    CONSTRAINT "Tickets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "subCategories" TEXT,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reviews" (
    "id" SERIAL NOT NULL,
    "venue_id" INTEGER NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "Rating" INTEGER NOT NULL,

    CONSTRAINT "Reviews_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Venues_name_key" ON "Venues"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Venues_seat_capacity_key" ON "Venues"("seat_capacity");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_Account_username_key" ON "Customer_Account"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_Account_email_key" ON "Customer_Account"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_Account_phoneNumber_key" ON "Customer_Account"("phoneNumber");

-- AddForeignKey
ALTER TABLE "Events" ADD CONSTRAINT "Events_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Events" ADD CONSTRAINT "Events_venue_id_fkey" FOREIGN KEY ("venue_id") REFERENCES "Venues"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_ticket_id_fkey" FOREIGN KEY ("ticket_id") REFERENCES "Tickets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer_Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tickets" ADD CONSTRAINT "Tickets_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "Events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_venue_id_fkey" FOREIGN KEY ("venue_id") REFERENCES "Venues"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer_Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
