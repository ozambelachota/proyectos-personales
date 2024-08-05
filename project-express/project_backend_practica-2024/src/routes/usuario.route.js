const { Router } = require("express");
const usuarioRoute = Router();
const usuarioService = require("../services/usuario.service");

usuarioRoute.get("/", async (req, res) => {
  const usuarios = await usuarioService.getAllUsuarios();
  res.json(usuarios);
});

usuarioRoute.get("/:id", async (req, res) => {
  const { id } = req.params;
  const usuario = await usuarioService.getUsuarioById(parseInt(id));
  res.json(usuario);
});

usuarioRoute.post("/crear", async (req, res) => {
  const usuario = req.body;
  const usuarioCreated = await usuarioService.createUsuario(usuario);
  res.json(usuarioCreated);
});

usuarioRoute.put("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const usuario = req.body;
  const usuarioUpdated = await usuarioService.updateUsuario(
    parseInt(id),
    usuario
  );
  res.json(usuarioUpdated);
});

usuarioRoute.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const usuarioDeleted = await usuarioService.deleteUsuario(parseInt(id));
  res.json(usuarioDeleted);
});

usuarioRoute.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await usuarioService.login(username, password);
  res.json(user);
})
module.exports = usuarioRoute;
