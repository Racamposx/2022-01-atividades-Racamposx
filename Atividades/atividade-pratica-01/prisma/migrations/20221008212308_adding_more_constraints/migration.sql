-- DropForeignKey
ALTER TABLE `distribuicao` DROP FOREIGN KEY `produtoId`;

-- DropForeignKey
ALTER TABLE `doacao` DROP FOREIGN KEY `pessoaId`;

-- AddForeignKey
ALTER TABLE `distribuicao` ADD CONSTRAINT `produtoId` FOREIGN KEY (`produtoId`) REFERENCES `produto`(`produtoId`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `doacao` ADD CONSTRAINT `pessoaId` FOREIGN KEY (`pessoaId`) REFERENCES `pessoa`(`idpessoa`) ON DELETE CASCADE ON UPDATE NO ACTION;
