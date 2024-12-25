-- AlterTable
ALTER TABLE "Cats" ADD COLUMN     "voteCount" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Vote" (
    "id" SERIAL NOT NULL,
    "subscriberId" INTEGER NOT NULL,
    "catId" INTEGER NOT NULL,

    CONSTRAINT "Vote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Vote_subscriberId_catId_key" ON "Vote"("subscriberId", "catId");

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_subscriberId_fkey" FOREIGN KEY ("subscriberId") REFERENCES "Subscribers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_catId_fkey" FOREIGN KEY ("catId") REFERENCES "Cats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
