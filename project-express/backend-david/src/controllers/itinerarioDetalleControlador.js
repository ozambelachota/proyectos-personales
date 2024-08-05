import { Router } from "express";
import {
  crearItinerarioDetalle,
  getItinerarioDetalle,
  getItinerarioIdBusDetalle,
} from "../services/itinerarioDetalleServicio.js";

const itinerarioDetalleRouter = Router();

itinerarioDetalleRouter.get("/", async (req, res) => {
  res.json(await getItinerarioDetalle());
});

itinerarioDetalleRouter.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  res.json(await getItinerarioIdBusDetalle(id));
});

itinerarioDetalleRouter.post("/crear", async (req, res) => {
  const { idItinerario, idBus } = req.body;
  const itinerario = await crearItinerarioDetalle({ idItinerario, idBus });
  res.json(itinerario);
});

itinerarioDetalleRouter.put("/editing/:id", async (req, res) => {
  const id = Number(req.params.id);
  const { idItinerario, idAsiento, dni, nombres, ocupado } = req.body;
  res.json(
    await actualizarItinerario(id, {
      idItinerario,
      idAsiento,
      dni,
      nombres,
      ocupado,
    })
  );
});

export default itinerarioDetalleRouter;
