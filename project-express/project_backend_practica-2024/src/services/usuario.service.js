const usuarioSchema = require("../model/usuario.model");

const getAllUsuarios = async () => {
  try {
    const usuarios = await usuarioSchema.findMany();
    return usuarios;
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    throw error;
  }
};

const getUsuarioById = async (id) => {
  try {
    const usuario = await usuarioSchema.findUnique({ where: { id } });
    return usuario;
  } catch (error) {
    console.error("Error al obtener el usuario:", error);
    throw error;
  }
};

const deleteUsuario = async (id) => {
  try {
    const usuarioDeleted = await usuarioSchema.delete({
      where: { idusuario: id },
    });
    return usuarioDeleted;
  } catch (error) {
    console.error("Error al eliminar el usuario:", error);
    throw error;
  }
};

const createUsuario = async (Usuario) => {
  try {
    const usuarioCreated = await usuarioSchema.create({ data: Usuario });
    return usuarioCreated;
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    throw error;
  }
};

const updateUsuario = async (id, Usuario) => {
  try {
    const usuarioUpdated = await usuarioSchema.update({
      where: { idusuario: id },
      data: Usuario,
    });
    return usuarioUpdated;
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
    throw error;
  }
};

const login = async (username, password) => {
  const usuario = await usuarioSchema.findFirst({
    where: { username, password },
  });
  return usuario;
};
module.exports = {
  getAllUsuarios,
  getUsuarioById,
  deleteUsuario,
  createUsuario,
  updateUsuario,
  login,
};
