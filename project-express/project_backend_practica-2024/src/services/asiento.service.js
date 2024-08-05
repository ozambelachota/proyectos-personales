const asientoSchema = require("../model/asiento.model");

const getAllAsientos = async () => {
  try {
    const asientos = await asientoSchema.findMany();
    return asientos;
  } catch (error) {
    console.error("Error al obtener los asientos:", error);
    throw error;
  }
};

const getAsientosIdBus = async (idBus) => {
  try {
    const asientos = await asientoSchema.findUnique({ where: { idBus } });
    return asientos;
  } catch (error) {
    console.error("Error al obtener los asientos:", error);
    throw error;
  }
};

const createAsiento = async (idBus, cantidad) => {
  try {
    let asientosCreated = [];
    for (let i = 1; i < cantidad + 1; i++) {
      let correlativo = `${i}`;
      const asiento = await asientoSchema.createMany({ data:{
        idBus,
        correlativo
      } });
      asientosCreated.push(asiento);
    }
    return asientosCreated;
  } catch (error) {
    console.error("Error al crear un nuevo asiento:", error);
    throw error;
  }
};

const deleteAsiento = async (id) => {
  try {
    const asientoDeleted = await asientoSchema.deleteMany({
      where: { idBus: id },
    });
    return asientoDeleted;
  } catch (error) {
    console.error("Error al eliminar el asiento:", error);
    throw error;
  }
};

module.exports = {
  getAllAsientos,
  getAsientosIdBus,
  createAsiento,
  deleteAsiento,
};
