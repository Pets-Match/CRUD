/*
  Warnings:

  - A unique constraint covering the columns `[ownerId,id]` on the table `Pet` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Pet_ownerId_id_key" ON "Pet"("ownerId", "id");
