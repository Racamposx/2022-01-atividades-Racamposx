/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `estado` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `estado_nome_key` ON `estado`(`nome`);
