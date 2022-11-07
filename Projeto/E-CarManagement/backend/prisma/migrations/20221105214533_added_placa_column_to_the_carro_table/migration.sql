/*
  Warnings:

  - A unique constraint covering the columns `[placa]` on the table `carro` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `placa` to the `carro` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `carro` ADD COLUMN `placa` VARCHAR(8) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `carro_placa_key` ON `carro`(`placa`);
