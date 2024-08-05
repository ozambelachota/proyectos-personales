import { asientoModel } from "../model/asiento.js";

export const getAsientoIdBus = async (idBus) => {
  console.log(idBus);
  const asientosBus = await asientoModel.findMany({ where: { idbus: idBus } });
  return asientosBus;
};

export const crearAsiento = async (idBus, numerosAsientos) => {
  let asiento = [];
  for (let x = 1; x < numerosAsientos + 1; x++) {
    let correlativo = `${x}`;
    const asientos = await asientoModel.createMany({
      data: { idbus: idBus, correlativo },
    });
    asiento.push(asientos);
  }
  return asiento;
};

export const eliminarAsiento = async (idBus) => {
  const asientosEliminados = await asientoModel.deleteMany({
    where: { idbus: idBus },
  });
  return asientosEliminados;
};
