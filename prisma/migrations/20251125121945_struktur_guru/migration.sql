/*
  Warnings:

  - The primary key for the `StrukturGuru` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `foto_struktur` on the `StrukturGuru` table. All the data in the column will be lost.
  - You are about to drop the column `id_struktur` on the `StrukturGuru` table. All the data in the column will be lost.
  - Added the required column `imageUrl` to the `StrukturGuru` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `StrukturGuru` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "StrukturGuru" DROP CONSTRAINT "StrukturGuru_pkey",
DROP COLUMN "foto_struktur",
DROP COLUMN "id_struktur",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD CONSTRAINT "StrukturGuru_pkey" PRIMARY KEY ("id");
