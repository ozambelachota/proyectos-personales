
const prisma = require("@prisma/client");
const { PrismaClient } = prisma;
const prismadb = new PrismaClient();

module.exports = prismadb;
