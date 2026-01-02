-- CreateTable
CREATE TABLE "Operations" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "operator" TEXT NOT NULL,
    "first" TEXT NOT NULL,
    "second" TEXT NOT NULL,
    "result" TEXT NOT NULL,

    CONSTRAINT "Operations_pkey" PRIMARY KEY ("id")
);
