-- CreateTable
CREATE TABLE `Bus` (
    `idbus` INTEGER NOT NULL AUTO_INCREMENT,
    `placa` VARCHAR(191) NOT NULL,
    `marca` VARCHAR(191) NOT NULL,
    `modelo` VARCHAR(191) NOT NULL,
    `asientos` INTEGER NOT NULL,

    UNIQUE INDEX `Bus_placa_key`(`placa`),
    PRIMARY KEY (`idbus`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Asiento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `correlativo` VARCHAR(191) NOT NULL,
    `idBus` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Chofer` (
    `idchofer` INTEGER NOT NULL AUTO_INCREMENT,
    `dni` VARCHAR(8) NOT NULL,
    `nombres` VARCHAR(191) NOT NULL,
    `fingreso` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Chofer_dni_key`(`dni`),
    PRIMARY KEY (`idchofer`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Itinerario` (
    `iditinerario` INTEGER NOT NULL AUTO_INCREMENT,
    `idBus` INTEGER NOT NULL,
    `idChofer` INTEGER NOT NULL,
    `fechaViaje` DATETIME(3) NOT NULL,

    PRIMARY KEY (`iditinerario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DetalleItinerario` (
    `iddetalle` INTEGER NOT NULL AUTO_INCREMENT,
    `idItinerario` INTEGER NOT NULL,
    `idAsiento` INTEGER NOT NULL,
    `dni` VARCHAR(8) NOT NULL,
    `nombres` VARCHAR(191) NOT NULL,
    `ocupado` BOOLEAN NOT NULL,

    PRIMARY KEY (`iddetalle`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `idusuario` INTEGER NOT NULL AUTO_INCREMENT,
    `dni` VARCHAR(8) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `rol` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idusuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Asiento` ADD CONSTRAINT `Asiento_idBus_fkey` FOREIGN KEY (`idBus`) REFERENCES `Bus`(`idbus`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Itinerario` ADD CONSTRAINT `Itinerario_idBus_fkey` FOREIGN KEY (`idBus`) REFERENCES `Bus`(`idbus`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Itinerario` ADD CONSTRAINT `Itinerario_idChofer_fkey` FOREIGN KEY (`idChofer`) REFERENCES `Chofer`(`idchofer`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetalleItinerario` ADD CONSTRAINT `DetalleItinerario_idItinerario_fkey` FOREIGN KEY (`idItinerario`) REFERENCES `Itinerario`(`iditinerario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetalleItinerario` ADD CONSTRAINT `DetalleItinerario_idAsiento_fkey` FOREIGN KEY (`idAsiento`) REFERENCES `Asiento`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
