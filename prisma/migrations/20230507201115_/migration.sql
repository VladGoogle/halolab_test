/*
  Warnings:

  - Made the column `codename` on table `Sensor` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Sensor" ALTER COLUMN "codename" SET NOT NULL;
