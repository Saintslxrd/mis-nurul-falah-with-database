-- CreateTable
CREATE TABLE "PPDBFile" (
    "id" SERIAL NOT NULL,
    "formulirUrl" VARCHAR(255),
    "panduanUrl" VARCHAR(255),
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PPDBFile_pkey" PRIMARY KEY ("id")
);
