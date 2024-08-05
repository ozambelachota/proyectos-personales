import { Router } from "express";
import {
  crearAsiento,
  eliminarAsiento,
  getAsientoIdBus,
} from "../services/asientoServicio.js";

const asientoRouter = Router();

asientoRouter.get("/:idbus", async (req, res) => {
  const { idbus } = req.params;

  res.json(await getAsientoIdBus(parseInt(idbus)));
});

asientoRouter.post("/crear", async (req, res) => {
  const { idbus, cantidad } = req.body;
  res.json(await crearAsiento(idbus, cantidad));
});

asientoRouter.delete("/deleting/:idbus", async (req, res) => {
  const idbus = Number(req.params.idbus);
  res.json({ "asiento bus eliminado": await eliminarAsiento(idbus) });
});
export default asientoRouter;
