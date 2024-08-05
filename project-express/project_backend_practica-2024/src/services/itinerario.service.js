const itinerarioSchema = require("../model/itinerario.model");

module.exports = {
  getAllItinerarios: async () => {
    const itinerarios = await itinerarioSchema.findMany();
    return itinerarios;
  },

  getItinerarioById: async (id) => {
    const itinerario = await itinerarioSchema.findUnique({
      where: { iditinerario: id },
    });
    return itinerario;
  },

  createItinerario: async (itinerario) => {
    const createdItinerario = await itinerarioSchema.create({
      data: {
        ...itinerario,
        fechaViaje: new Date(itinerario.fechaViaje),
      },
    });
    return createdItinerario;
  },

  updateItinerario: async (id, itinerario) => {
    const itinerarioUpdated = await itinerarioSchema.update({
      where: { iditinerario: id },
      data: itinerario,
    });
    return itinerarioUpdated;
  },

  deleteItinerario: async (id) => {
    const itinerarioDeleted = await itinerarioSchema.delete({
      where: { iditinerario: id },
    });
    return itinerarioDeleted;
  },
};
