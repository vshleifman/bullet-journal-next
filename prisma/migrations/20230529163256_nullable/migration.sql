-- AlterTable
ALTER TABLE "DayTask" ALTER COLUMN "start" DROP NOT NULL;

-- AlterTable
ALTER TABLE "MonthTask" ALTER COLUMN "start" DROP NOT NULL;

-- AlterTable
ALTER TABLE "YearTask" ALTER COLUMN "start" DROP NOT NULL;
