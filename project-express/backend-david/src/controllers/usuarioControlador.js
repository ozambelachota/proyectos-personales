import { Router } from "express";
import { crearUsuario, getUsuario, getUsuarioId, usuarioLogin } from "../services/usuarioServicio.js";

const usuarioRoute = Router();

usuarioRoute.get("/", async (req, res) => {
  res.json(await getUsuario());
});
usuarioRoute.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  res.json(await getUsuarioId(id));
});

usuarioRoute.post("/crear", async (req, res) => {
  const user = req.body;
  res.json(await crearUsuario(user));
});

usuarioRoute.put("/editing/:id", async (req, res) => {
  const id = Number(req.params.id);
  const user = req.body;
  res.json(await actualizarUsuario(user, id));
});

usuarioRoute.delete("/deleting/:id", async (req, res) => {
  const id = Number(req.params.id);
  res.json(await eliminarUsuario(id));
});

usuarioRoute.post("/login", async (req, res) => {
  const user = req.body;
  res.json(await usuarioLogin(user));
});

export default usuarioRoute;
