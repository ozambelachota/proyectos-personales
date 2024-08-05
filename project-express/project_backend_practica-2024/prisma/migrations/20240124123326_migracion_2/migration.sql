/*
  Warnings:

  - The primary key for the `asiento` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `asiento` table. All the data in the column will be lost.
  - Added the required column `idasiento` to the `Asiento` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `detalleitinerario` DROP FOREIGN KEY `DetalleItinerario_idAsiento_fkey`;

-- AlterTable
ALTER TABLE `asiento` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `idasiento` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`idasiento`);

-- AddForeignKey
ALTER TABLE `DetalleItinerario` ADD CONSTRAINT `DetalleItinerario_idAsiento_fkey` FOREIGN KEY (`idAsiento`) REFERENCES `Asiento`(`idasiento`) ON DELETE RESTRICT ON UPDATE CASCADE;
