/*
  Warnings:

  - Added the required column `password` to the `Owner` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Owner" ADD COLUMN     "password" TEXT NOT NULL,
ALTER COLUMN "doc" SET DATA TYPE TEXT,
ALTER COLUMN "phone" SET DATA TYPE TEXT;
