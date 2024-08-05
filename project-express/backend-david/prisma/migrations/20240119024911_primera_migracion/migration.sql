-- CreateTable
CREATE TABLE `Bus` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `placa` VARCHAR(191) NOT NULL,
    `marca` VARCHAR(191) NOT NULL,
    `modelo` VARCHAR(191) NOT NULL,
    `asientos` INTEGER NOT NULL,

    UNIQUE INDEX `Bus_placa_key`(`placa`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Asiento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `correlativo` VARCHAR(191) NOT NULL,
    `idbus` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Chofer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dni` VARCHAR(8) NOT NULL,
    `nombres` VARCHAR(191) NOT NULL,
    `fingreso` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Chofer_dni_key`(`dni`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Itinerario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idbus` INTEGER NOT NULL,
    `idchofer` INTEGER NOT NULL,
    `fechaViaje` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DetalleItinerario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idItinerario` INTEGER NOT NULL,
    `idAsiento` INTEGER NOT NULL,
    `dni` VARCHAR(8) NOT NULL,
    `nombres` VARCHAR(191) NOT NULL,
    `ocupado` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dni` VARCHAR(8) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `idrol` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rol` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_rol` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Asiento` ADD CONSTRAINT `Asiento_idbus_fkey` FOREIGN KEY (`idbus`) REFERENCES `Bus`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Itinerario` ADD CONSTRAINT `Itinerario_idbus_fkey` FOREIGN KEY (`idbus`) REFERENCES `Bus`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Itinerario` ADD CONSTRAINT `Itinerario_idchofer_fkey` FOREIGN KEY (`idchofer`) REFERENCES `Chofer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetalleItinerario` ADD CONSTRAINT `DetalleItinerario_idItinerario_fkey` FOREIGN KEY (`idItinerario`) REFERENCES `Itinerario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetalleItinerario` ADD CONSTRAINT `DetalleItinerario_idAsiento_fkey` FOREIGN KEY (`idAsiento`) REFERENCES `Asiento`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_idrol_fkey` FOREIGN KEY (`idrol`) REFERENCES `Rol`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
