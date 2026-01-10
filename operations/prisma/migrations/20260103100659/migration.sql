-- CreateTable
CREATE TABLE "Operations" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "operation" TEXT NOT NULL DEFAULT '+',
    "first" INTEGER NOT NULL,
    "second" INTEGER NOT NULL,
    "result" INTEGER NOT NULL,

    CONSTRAINT "Operations_pkey" PRIMARY KEY ("id")
);
