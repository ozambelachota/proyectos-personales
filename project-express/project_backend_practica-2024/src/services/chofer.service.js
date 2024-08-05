const choferSchema = require("../model/chofer.model");

module.exports = {
  getAllChoferes: async () => {
    const choferes = await choferSchema.findMany();
    return choferes;
  },

  getChoferById: async (id) => {
    const chofer = await choferSchema.findUnique({ where: { idchofer: id } });
    return chofer;
  },

  createChofer: async (chofer) => {
    try {
      const newChofer = await choferSchema.create({
        data: {
          fingreso: new Date(),
          ...chofer,
        },
      });
      return newChofer;
    } catch (error) {
      console.error("Error al crear el chofer:", error);
      throw error;
    }
  },

  updateChofer: async (id, chofer) => {
    const choferUpdated = await choferSchema.update({
      where: { idchofer: id },
      data: chofer,
    });
    return choferUpdated;
  },

  deleteChofer: async (id) => {
    const choferDeleted = await choferSchema.delete({
      where: { idchofer: id },
    });
    return choferDeleted;
  },
};
