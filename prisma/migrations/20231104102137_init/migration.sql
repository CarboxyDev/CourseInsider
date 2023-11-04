-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "credits" INTEGER NOT NULL,
    "stream" TEXT NOT NULL,
    "prereqs" TEXT NOT NULL,
    "professor" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "timing" TEXT NOT NULL,
    "semester" TEXT NOT NULL,
    "seats" INTEGER NOT NULL,
    "openSeats" INTEGER NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "ratingCount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);
