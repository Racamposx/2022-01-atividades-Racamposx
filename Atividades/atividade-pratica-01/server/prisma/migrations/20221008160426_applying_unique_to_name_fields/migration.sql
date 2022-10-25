/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `cidade` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nome]` on the table `local_coleta` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nome]` on the table `pessoa` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tipo]` on the table `tipo_sanguineo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nome]` on the table `unidade` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `cidade_nome_key` ON `cidade`(`nome`);

-- CreateIndex
CREATE UNIQUE INDEX `local_coleta_nome_key` ON `local_coleta`(`nome`);

-- CreateIndex
CREATE UNIQUE INDEX `pessoa_nome_key` ON `pessoa`(`nome`);

-- CreateIndex
CREATE UNIQUE INDEX `tipo_sanguineo_tipo_key` ON `tipo_sanguineo`(`tipo`);

-- CreateIndex
CREATE UNIQUE INDEX `unidade_nome_key` ON `unidade`(`nome`);
