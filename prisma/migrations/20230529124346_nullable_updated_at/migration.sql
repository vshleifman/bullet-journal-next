-- AlterTable
ALTER TABLE "DayTask" ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "MonthTask" ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "YearTask" ALTER COLUMN "updatedAt" DROP NOT NULL;
