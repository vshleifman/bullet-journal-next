/*
  Warnings:

  - Added the required column `targetDate` to the `DayTask` table without a default value. This is not possible if the table is not empty.
  - Added the required column `targetDate` to the `MonthTask` table without a default value. This is not possible if the table is not empty.
  - Added the required column `targetDate` to the `YearTask` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DayTask" ADD COLUMN     "targetDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "MonthTask" ADD COLUMN     "targetDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "YearTask" ADD COLUMN     "targetDate" TIMESTAMP(3) NOT NULL;
