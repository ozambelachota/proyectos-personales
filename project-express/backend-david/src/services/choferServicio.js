import { choferModel } from "../model/chofer.js";

export const getChofer = async () => {
  const chofer = await choferModel.findMany();
  return chofer;
};

export const getChoferId = async (id) => {
  try {
    const chofer = await choferModel.findUnique({ where: { id } });
    return chofer;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const crearChofer = async (chofer) => {
  const newChofer = await choferModel.create({
    data: {
      nombres: chofer.nombres,
      dni: chofer.dni,
      fingreso: new Date(chofer.fingreso),
    },
  });
  return newChofer;
};

export const actualizarChofer = async (id, chofer) => {
  const editChofer = await choferModel.update({ where: { id }, data: {
    nombres: chofer.nombres,
    dni: chofer.dni,
    fingreso: new Date(chofer.fingreso),
  } });
  return editChofer;
};

export const eliminarChofer = async (id) => {
  const choferDelete = await choferModel.delete({ where: { id } });
  return choferDelete;
};
