/*
  Warnings:

  - A unique constraint covering the columns `[tipo]` on the table `tipo_sanguineo` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `produto` DROP FOREIGN KEY `doacaoId`;

-- CreateIndex
CREATE UNIQUE INDEX `tipo_sanguineo_tipo_key` ON `tipo_sanguineo`(`tipo`);

-- AddForeignKey
ALTER TABLE `produto` ADD CONSTRAINT `doacaoId` FOREIGN KEY (`doacaoId`) REFERENCES `doacao`(`doacaoId`) ON DELETE CASCADE ON UPDATE NO ACTION;
