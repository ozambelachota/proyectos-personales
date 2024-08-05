import { usuarioModel } from "../model/usuario.js";

export const getUsuario = async () => {
  const usuarios = await usuarioModel.findMany();
  return usuarios;
};

export const getUsuarioId = async (id) => {
  const usuario = await usuarioModel.findUnique({ where: { id } });
  return usuario;
};

export const crearUsuario = async (usuario) => {
  const usuarioNuevo = await usuarioModel.create({ data: usuario });
  return usuarioNuevo;
};

export const actualizarUsuario = async (usuario, id) => {
  const editUser = await usuarioModel.update({ where: { id }, data: usuario });
  return editUser;
};

export const eliminarUsuario = async (id) => {
  const userDelete = await usuarioModel.delete({ where: { id } });
  return userDelete;
};

export const usuarioLogin = async (usuario) => {
  const userLogin = await usuarioModel.findFirst({
    where: { username: usuario.username, password: usuario.password },
  });

  return userLogin;
};
