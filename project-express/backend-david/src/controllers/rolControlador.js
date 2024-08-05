import { Router } from "express";
import { actualizarRol, crearRol, eliminarRol, getRol, getRolId } from "../services/rolServicio.js";

const rolRouter = Router();

rolRouter.get("/", async (req, res) => {
  res.json(await getRol());
});

rolRouter.post("/crear", async (req, res) => {
  const rol = req.body;
  res.json(await crearRol(rol));
});

rolRouter.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  res.json(await getRolId(id));
});

rolRouter.put("/editing/:id", async (req, res) => {
  const id = Number(req.params.id);
  const rol = req.body;
  res.json(await actualizarRol(id, rol));
});

rolRouter.delete("/deleting/:id", async (req, res) => {
  const id = Number(req.params.id);
  res.json(await eliminarRol(id));
});

export default rolRouter
