import { itinerarioModel } from "../model/itinerario.js";

export const getItinerario = async () => {
  const itinerario = await itinerarioModel.findMany();
  return itinerario;
};

export const getItinerarioId = async (id) => {
  const itinerario = await itinerarioModel.findUnique({ where: { id } });
  return itinerario;
}

export const crearItinerario = async (itinerario) => {
  const newItinerario = await itinerarioModel.create({ data:{
    idbus: itinerario.idBus,
    idchofer: itinerario.idChofer,
    fechaViaje:new Date(itinerario.fechaViaje)
  } });
  return newItinerario;
}

export const actualizarItinerario = async (id, itinerario) => {
  const editItinerario = await itinerarioModel.update({ where: { id }, data: itinerario });
  return editItinerario;
}

export const eliminarItinerario = async (id) => {
  const itinerarioDelete = await itinerarioModel.delete({ where: { id } });
  return itinerarioDelete;
}
