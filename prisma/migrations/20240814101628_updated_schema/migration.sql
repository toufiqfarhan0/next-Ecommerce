/*
  Warnings:

  - Made the column `providerId` on table `Account` required. This step will fail if there are existing NULL values in that column.
  - Made the column `providerAccountId` on table `Account` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Account" ALTER COLUMN "providerId" SET NOT NULL,
ALTER COLUMN "providerAccountId" SET NOT NULL;
