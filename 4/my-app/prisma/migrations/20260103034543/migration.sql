-- CreateTable
CREATE TABLE "Operation" (
    "id" SERIAL NOT NULL,
    "num1" INTEGER NOT NULL,
    "num2" INTEGER NOT NULL,
    "operand" TEXT NOT NULL,
    "result" INTEGER NOT NULL,

    CONSTRAINT "Operation_pkey" PRIMARY KEY ("id")
);
