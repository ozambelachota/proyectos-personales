import { Router } from "express";
import {
  actualizarChofer,
  crearChofer,
  eliminarChofer,
  getChofer,
  getChoferId,
} from "../services/choferServicio.js";

const choferRouter = Router();

choferRouter.get("/", async (req, res) => {
  res.json(await getChofer());
});

choferRouter.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  res.json(await getChoferId(id));
});

choferRouter.post("/crear", async (req, res) => {
  const chofer = req.body;
  res.json(await crearChofer(chofer));
});

choferRouter.put("/editing/:id", async (req, res) => {
  const id = Number(req.params.id);
  const chofer = req.body;
  res.json(await actualizarChofer(id, chofer));
});

choferRouter.delete("/deleting/:id", async (req, res) => {
  const id = Number(req.params.id);
  res.json(await eliminarChofer(id));
});

export default choferRouter;
