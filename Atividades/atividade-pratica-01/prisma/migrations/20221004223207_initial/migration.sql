-- CreateTable
CREATE TABLE `cidade` (
    `cidadeId` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(45) NOT NULL,
    `estadoId` INTEGER NOT NULL,
    `criadoEm` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `atualizadoEm` DATETIME(3) NULL,

    INDEX `estadoId_idx`(`estadoId`),
    PRIMARY KEY (`cidadeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `distribuicao` (
    `distribuicaoId` INTEGER NOT NULL AUTO_INCREMENT,
    `produtoId` INTEGER NOT NULL,
    `unidadeId` INTEGER NOT NULL,
    `data` DATETIME(0) NOT NULL,
    `criadoEm` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `atualizadoEm` DATETIME(3) NULL,

    INDEX `produtoId_idx`(`produtoId`),
    INDEX `unidadeId_idx`(`unidadeId`),
    PRIMARY KEY (`distribuicaoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `doacao` (
    `doacaoId` INTEGER NOT NULL AUTO_INCREMENT,
    `pessoaId` INTEGER NOT NULL,
    `localId` INTEGER NOT NULL,
    `data` DATETIME(0) NULL,
    `criadoEm` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `atualizadoEm` DATETIME(3) NULL,

    INDEX `localId_idx`(`localId`),
    INDEX `pessoaId_idx`(`pessoaId`),
    PRIMARY KEY (`doacaoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `estado` (
    `idEstado` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(25) NOT NULL,
    `sigla` VARCHAR(2) NOT NULL,
    `criadoEm` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `AtualizadoEm` DATETIME(3) NULL,

    PRIMARY KEY (`idEstado`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `local_coleta` (
    `idlocal-coleta` INTEGER NOT NULL AUTO_INCREMENT,
    `cidadeId` INTEGER NOT NULL,
    `nome` VARCHAR(45) NOT NULL,
    `rua` VARCHAR(45) NOT NULL,
    `numero` VARCHAR(4) NOT NULL,
    `complemento` VARCHAR(45) NOT NULL,
    `criadoEm` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `atualizadoEm` DATETIME(3) NULL,

    INDEX `cidadeId_idx`(`cidadeId`),
    PRIMARY KEY (`idlocal-coleta`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pessoa` (
    `idpessoa` INTEGER NOT NULL AUTO_INCREMENT,
    `cidadeId` INTEGER NOT NULL,
    `tipoId` INTEGER NOT NULL,
    `nome` VARCHAR(45) NOT NULL,
    `rua` VARCHAR(45) NOT NULL,
    `numero` VARCHAR(4) NOT NULL,
    `complemento` VARCHAR(45) NULL,
    `documento` VARCHAR(15) NULL,
    `criadoEm` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `atualizadoEm` DATETIME(3) NULL,

    INDEX `pessoa_ibfk_1_idx`(`cidadeId`),
    INDEX `tipoId_idx`(`tipoId`),
    PRIMARY KEY (`idpessoa`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produto` (
    `produtoId` INTEGER NOT NULL AUTO_INCREMENT,
    `doacaoId` INTEGER NOT NULL,
    `etiqueta` VARCHAR(45) NOT NULL,
    `validade` DATETIME(0) NOT NULL,
    `criadoEm` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `atualizadoEm` DATETIME(3) NULL,

    INDEX `doacaoId_idx`(`doacaoId`),
    PRIMARY KEY (`produtoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipo_sanguineo` (
    `tipoId` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo` VARCHAR(2) NOT NULL,
    `fator` VARCHAR(10) NOT NULL,
    `criadoEm` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `atualizadoEm` DATETIME(3) NULL,

    PRIMARY KEY (`tipoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `unidade` (
    `unidadeId` INTEGER NOT NULL AUTO_INCREMENT,
    `cidadeId` INTEGER NOT NULL,
    `nome` VARCHAR(45) NOT NULL,
    `numero` VARCHAR(4) NOT NULL,
    `complemento` VARCHAR(45) NULL,
    `criadoEm` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `atualizadoEm` DATETIME(3) NULL,

    INDEX `cidadeId_idx`(`cidadeId`),
    PRIMARY KEY (`unidadeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cidade` ADD CONSTRAINT `estadoId` FOREIGN KEY (`estadoId`) REFERENCES `estado`(`idEstado`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `distribuicao` ADD CONSTRAINT `produtoId` FOREIGN KEY (`produtoId`) REFERENCES `produto`(`produtoId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `distribuicao` ADD CONSTRAINT `unidadeId` FOREIGN KEY (`unidadeId`) REFERENCES `unidade`(`unidadeId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `doacao` ADD CONSTRAINT `localId` FOREIGN KEY (`localId`) REFERENCES `local_coleta`(`idlocal-coleta`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `doacao` ADD CONSTRAINT `pessoaId` FOREIGN KEY (`pessoaId`) REFERENCES `pessoa`(`idpessoa`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `local_coleta` ADD CONSTRAINT `cidadeId` FOREIGN KEY (`cidadeId`) REFERENCES `cidade`(`cidadeId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `pessoa` ADD CONSTRAINT `cidade-id` FOREIGN KEY (`cidadeId`) REFERENCES `cidade`(`cidadeId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `pessoa` ADD CONSTRAINT `tipoId` FOREIGN KEY (`tipoId`) REFERENCES `tipo_sanguineo`(`tipoId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `produto` ADD CONSTRAINT `doacaoId` FOREIGN KEY (`doacaoId`) REFERENCES `doacao`(`doacaoId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `unidade` ADD CONSTRAINT `cidad_id` FOREIGN KEY (`cidadeId`) REFERENCES `cidade`(`cidadeId`) ON DELETE NO ACTION ON UPDATE NO ACTION;
