-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'ANALYST', 'REVIEWER', 'QA');

-- CreateEnum
CREATE TYPE "OOSStatus" AS ENUM ('OPEN', 'IN_INVESTIGATION', 'PHASE_ONE_COMPLETED', 'REQUIRES_PHASE_TWO', 'CLOSED');

-- CreateEnum
CREATE TYPE "OOSPhase" AS ENUM ('PHASE_ONE', 'PHASE_TWO', 'COMPLETED');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'ANALYST',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OOSCase" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "batchNumber" TEXT NOT NULL,
    "area" TEXT,
    "testType" TEXT NOT NULL,
    "method" TEXT NOT NULL,
    "resultObtained" TEXT NOT NULL,
    "specification" TEXT NOT NULL,
    "microorganism" TEXT,
    "description" TEXT,
    "status" "OOSStatus" NOT NULL DEFAULT 'OPEN',
    "phase" "OOSPhase" NOT NULL DEFAULT 'PHASE_ONE',
    "createdById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OOSCase_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "OOSCase_code_key" ON "OOSCase"("code");

-- AddForeignKey
ALTER TABLE "OOSCase" ADD CONSTRAINT "OOSCase_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
