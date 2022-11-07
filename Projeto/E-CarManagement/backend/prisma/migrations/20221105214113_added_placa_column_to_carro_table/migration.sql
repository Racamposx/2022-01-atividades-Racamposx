-- CreateTable
CREATE TABLE `agendamento` (
    `agendamentoId` INTEGER NOT NULL AUTO_INCREMENT,
    `data` TIMESTAMP(0) NOT NULL,
    `idCarro` INTEGER NOT NULL,
    `idCliente` INTEGER NOT NULL,

    INDEX `idCarro_idx`(`idCarro`),
    INDEX `idCliente_idx`(`idCliente`),
    PRIMARY KEY (`agendamentoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `carro` (
    `carroId` INTEGER NOT NULL AUTO_INCREMENT,
    `modelo` VARCHAR(45) NOT NULL,
    `marca` VARCHAR(45) NOT NULL,
    `idCliente` INTEGER NOT NULL,

    INDEX `cliente_car_refer_idx`(`idCliente`),
    PRIMARY KEY (`carroId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cliente` (
    `clienteId` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(30) NOT NULL,
    `sobrenome` VARCHAR(150) NOT NULL,
    `idEndereco` INTEGER NOT NULL,
    `cpf` CHAR(15) NOT NULL,

    INDEX `enderecoId_idx`(`idEndereco`),
    PRIMARY KEY (`clienteId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `endereco` (
    `enderecoId` INTEGER NOT NULL AUTO_INCREMENT,
    `rua` VARCHAR(45) NOT NULL,
    `numero` VARCHAR(5) NOT NULL,
    `complemento` VARCHAR(45) NULL,
    `cep` VARCHAR(9) NOT NULL,
    `cidade` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`enderecoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `manutencao` (
    `manutencaoId` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(200) NOT NULL,
    `dataRealizada` TIMESTAMP(0) NOT NULL,
    `idCarro` INTEGER NOT NULL,
    `idCliente` INTEGER NOT NULL,

    INDEX `carroId_idx`(`idCarro`),
    INDEX `clienteId_idx`(`idCliente`),
    PRIMARY KEY (`manutencaoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `agendamento` ADD CONSTRAINT `carro_Id` FOREIGN KEY (`idCarro`) REFERENCES `carro`(`carroId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `agendamento` ADD CONSTRAINT `cliente_Id` FOREIGN KEY (`idCliente`) REFERENCES `cliente`(`clienteId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `carro` ADD CONSTRAINT `cliente_car_refer` FOREIGN KEY (`idCliente`) REFERENCES `cliente`(`clienteId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `cliente` ADD CONSTRAINT `endereco_refer` FOREIGN KEY (`idEndereco`) REFERENCES `endereco`(`enderecoId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `manutencao` ADD CONSTRAINT `idCarro` FOREIGN KEY (`idCarro`) REFERENCES `carro`(`carroId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `manutencao` ADD CONSTRAINT `idCliente` FOREIGN KEY (`idCliente`) REFERENCES `cliente`(`clienteId`) ON DELETE NO ACTION ON UPDATE NO ACTION;
