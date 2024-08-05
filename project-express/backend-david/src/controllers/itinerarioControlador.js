import { Router } from "express";
import {
  actualizarItinerario,
  crearItinerario,
  getItinerario,
  getItinerarioId,
} from "../services/itinierarioServicio.js";

const itinerarioRoute = Router();

itinerarioRoute.get("/", async (req, res) => {
  res.json(await getItinerario());
});

itinerarioRoute.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  res.json(await getItinerarioId(id));
});

itinerarioRoute.post("/crear", async (req, res) => {
  const { fechaViaje, idBus, idChofer } = req.body;
  const itinerario = await crearItinerario({ fechaViaje, idBus, idChofer });
  res.json(itinerario);
});

itinerarioRoute.put("/editing/:id", async (req, res) => {
  const id = Number(req.params.id);
  const { fechaViaje, idBus, idChofer } = req.body;
  const itinerario = await actualizarItinerario(id, {
    fechaViaje,
    idBus,
    idChofer,
  });
  res.json(itinerario);
});

itinerarioRoute.delete("/deleting/:id", async (req, res) => {
  const id = Number(req.params.id);
  res.json(await itinerarioElmininar(id));
});


export default itinerarioRoute;
