import { rolModel } from "../model/usuario.js";

export const getRol = async () => {
  const rol = await rolModel.findMany();
  return rol;
};

export const eliminarRol = async (id) => {
  const rol = await rolModel.delete({ where: { id } });
  return rol;
};

export const getRolId = async (id) => {
  const rol = await rolModel.findUnique({ where: { id } });
  return rol;
};

export const actualizarRol = async (id, rol) => {
  const editRol = await rolModel.update({ where: { id }, data: rol });
  return editRol;
};

export const crearRol = async (rol) => {
  const newRol = await rolModel.create({ data: rol });
  return newRol;
};
