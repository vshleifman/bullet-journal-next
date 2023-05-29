-- CreateTable
CREATE TABLE "YearTask" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deadline" TIMESTAMP(3),
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3),
    "text" VARCHAR(255) NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "blockers" TEXT,

    CONSTRAINT "YearTask_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MonthTask" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deadline" TIMESTAMP(3),
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3),
    "text" VARCHAR(255) NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "blockers" TEXT,

    CONSTRAINT "MonthTask_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DayTask" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deadline" TIMESTAMP(3),
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3),
    "text" VARCHAR(255) NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "blockers" TEXT,

    CONSTRAINT "DayTask_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MonthTaskToYearTask" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_DayTaskToMonthTask" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_MonthTaskToYearTask_AB_unique" ON "_MonthTaskToYearTask"("A", "B");

-- CreateIndex
CREATE INDEX "_MonthTaskToYearTask_B_index" ON "_MonthTaskToYearTask"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DayTaskToMonthTask_AB_unique" ON "_DayTaskToMonthTask"("A", "B");

-- CreateIndex
CREATE INDEX "_DayTaskToMonthTask_B_index" ON "_DayTaskToMonthTask"("B");

-- AddForeignKey
ALTER TABLE "_MonthTaskToYearTask" ADD CONSTRAINT "_MonthTaskToYearTask_A_fkey" FOREIGN KEY ("A") REFERENCES "MonthTask"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MonthTaskToYearTask" ADD CONSTRAINT "_MonthTaskToYearTask_B_fkey" FOREIGN KEY ("B") REFERENCES "YearTask"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DayTaskToMonthTask" ADD CONSTRAINT "_DayTaskToMonthTask_A_fkey" FOREIGN KEY ("A") REFERENCES "DayTask"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DayTaskToMonthTask" ADD CONSTRAINT "_DayTaskToMonthTask_B_fkey" FOREIGN KEY ("B") REFERENCES "MonthTask"("id") ON DELETE CASCADE ON UPDATE CASCADE;
