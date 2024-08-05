import { Router } from "express";
import {
  actualizarBus,
  busElmininar,
  busPorId,
  busesConItinerarios,
  crearBus,
  getBus,
} from "../services/busServicio.js";

const busRouter = Router();

busRouter.get("/", async (req, res) => {
  const buses = await getBus();
  res.json(buses);
});

busRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const bus = await busPorId(parseInt(id));
  res.json(bus);
});

busRouter.post("/crear", async (req, res) => {
  const { marca, modelo, placa, asientos } = req.body;
  const bus = await crearBus({ marca, modelo, placa, asientos });
  res.json(bus);
});

busRouter.put("/editing/:id", async (req, res) => {
  const { id } = req.params;
  const { marca, modelo, placa, asientos } = req.body;
  const bus = await actualizarBus(parseInt(id), {
    marca,
    modelo,
    placa,
    asientos,
  });
  res.json(bus);
});
busRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const bus = await busElmininar(parseInt(id));
  res.json(bus);
});

busRouter.get("/itinerario/busesItinerario/", async (req, res) => {
  const buses = await busesConItinerarios();
  res.json(buses);
});

export default busRouter;
