-- CreateTable
CREATE TABLE "Projects" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "mobileImage" TEXT,
    "liveLink" TEXT,
    "githubLink" TEXT NOT NULL,
    "tags" TEXT[],
    "about" TEXT NOT NULL,
    "Challenge" TEXT NOT NULL,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);
