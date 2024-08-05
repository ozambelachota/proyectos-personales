const busSchema = require("../model/bus.model");

const getAllBuses = async () => {
  try {
    const buses = await busSchema.findMany();
    return buses;
  } catch (error) {
    console.error("Error al obtener todos los buses:", error);
    throw error;
  }
};

const getBusById = async (idBus) => {
  try {
    const bus = await busSchema.findUnique({ where: { idbus: idBus } });
    return bus;
  } catch (error) {
    console.error("Error al obtener el bus:", error);
    throw error;
  }
};

const crearBus = async (Bus) => {
  try {
    const busNew = await busSchema.create({ data: Bus });

    return busNew;
  } catch (error) {
    console.error("Error al crear un nuevo bus:", error);
    throw error;
  }
};

const updateBus = async (idBus, Bus) => {
  try {
    const busUpdated = await busSchema.update({
      where: { idbus: idBus },
      data: Bus,
    });
    return busUpdated;
  } catch (error) {
    console.error("Error al actualizar el bus:", error);
    throw error;
  }
};

const deleteBus = async (id) => {
  try {
    const busDeleted = await busSchema.delete({ where: { idbus: id } });
    return busDeleted;
  } catch (error) {
    console.error("Error al eliminar el bus:", error);
    throw error;
  }
};

const getBusWhithItinerario = async () => {
  try {
    const buses = await busSchema.findMany({
      where: {
        itineraio: {
          some: {},
        },
      },
      include: {
        itineraio: true,
      },
    });
    return buses;
  } catch (error) {
    console.error("Error al obtener el bus:", error);
    throw error;
  }
};

module.exports = {
  getAllBuses,
  getBusById,
  crearBus,
  updateBus,
  deleteBus,
  getBusWhithItinerario,
};
