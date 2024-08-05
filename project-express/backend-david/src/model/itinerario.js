import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const itinerarioModel = prisma.itinerario;

export const detalleItinerarioModel = prisma.detalleItinerario
