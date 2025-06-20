-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "comments" TEXT[],
ADD COLUMN     "pinned" BOOLEAN NOT NULL DEFAULT false;
