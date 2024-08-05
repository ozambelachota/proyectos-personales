import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export const usuarioModel = prisma.usuario

export const rolModel = prisma.rol;