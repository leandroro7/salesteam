/*
  Warnings:

  - Added the required column `active` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `active` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `active` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `active` to the `Function` table without a default value. This is not possible if the table is not empty.
  - Added the required column `active` to the `HierarchicalRelationship` table without a default value. This is not possible if the table is not empty.
  - Added the required column `active` to the `Individual` table without a default value. This is not possible if the table is not empty.
  - Added the required column `active` to the `LegalEntity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `active` to the `SalesPersonFunction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Address" ADD COLUMN     "active" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "active" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Document" ADD COLUMN     "active" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Function" ADD COLUMN     "active" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "HierarchicalRelationship" ADD COLUMN     "active" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Individual" ADD COLUMN     "active" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "LegalEntity" ADD COLUMN     "active" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "SalesPersonFunction" ADD COLUMN     "active" BOOLEAN NOT NULL;
