import { itinerarioModel } from "../model/itinerario.js";

export const getItinerarioDetalle = async () => {
  const itinerario = await itinerarioModel.findMany();
  return itinerario;
};

export const getItinerarioIdBusDetalle = async (id) => {
  const itinerario = await itinerarioModel.findUnique({ where: { idbus: id } });
  return itinerario;
};

export const crearItinerarioDetalle = async (itinerario) => {
  const newItinerario = await itinerarioModel.create({
    data: {
      fechaViaje: new Date(itinerario.fechaViaje),
      idbus: itinerario.idbus,
      idchofer: itinerario.idchofer,
    },
  });
  return newItinerario;
};

export const actualizarItinerarioDetalle = async (id, itinerario) => {
  const editItinerario = await itinerarioModel.update({
    where: { id },
    data: itinerario,
  });
  return editItinerario;
};

export const eliminarItinerarioDetalle = async (id) => {
  const itinerarioDelete = await itinerarioModel.delete({ where: { id } });
  return itinerarioDelete;
};
