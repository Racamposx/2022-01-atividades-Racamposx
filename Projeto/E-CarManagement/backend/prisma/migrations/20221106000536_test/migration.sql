/*
  Warnings:

  - You are about to drop the column `data` on the `agendamento` table. All the data in the column will be lost.
  - Added the required column `date` to the `agendamento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `agendamento` DROP COLUMN `data`,
    ADD COLUMN `date` TIMESTAMP(0) NOT NULL;
