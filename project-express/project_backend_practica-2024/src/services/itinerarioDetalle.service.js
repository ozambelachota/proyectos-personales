const detalleSchema = require("../model/itinerarioDetalle.model");

module.exports = {
  getAllDetalleItinerario: async () => {
    const detalles = await detalleSchema.findMany();
    return detalles;
  },
  getDetalleItinerarioById: async (id) => {
    const detalle = await detalleSchema.findUnique({
      where: {
        iddetalle: id,
      },
    });
    return detalle;
  },
  createDetalleItinerario: async (detalle) => {
    const detalleCreated = await detalleSchema.create({
      data: detalle,
    });
    return detalleCreated;
  },
  updateItinerario: async (id, detalle) => {
    const detalleUpdated = await detalleSchema.update({
      where: { iddetalle: id },
      data: detalle,
    });
    return detalleUpdated;
  },
  deleteItinerario: async (id) => {
    const detalleDeleted = await detalleSchema.delete({
      where: { iddetalle: id },
    });
    return detalleDeleted;
  },
};
