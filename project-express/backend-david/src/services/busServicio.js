import { busModel } from "../model/bus.js";

export const getBus = async () => {
  const bus = await busModel.findMany();
  return bus;
};
export const busPorId = async (idbus) => {
  const bus = await busModel.findUnique({ where: { id: idbus } });
  return bus;
};
export const crearBus = async (Bus) => {
  const bus = await busModel.create({ data: Bus });
  return bus;
};

export const actualizarBus = async (idbus, Bus) => {
  const bus = await busModel.update({ where: { id: idbus }, data: Bus });

  return bus;
};

export const busElmininar = async (idbus) => {
  const bus = await busModel.delete({ where: { id: idbus } });
  return bus;
};

export const busesConItinerarios = async () => {
  const buses = await busModel.findMany({
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
};
