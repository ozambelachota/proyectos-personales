const { Router } = require("express");
const detalleService = require("../services/itinerarioDetalle.service");

const detalleRoute = Router();

detalleRoute.get("/", async (req, res) => {
  const detalles = await detalleService.getAllDetalleItinerario();
  res.json(detalles);
});

detalleRoute.get("/:id", async (req, res) => {
  const { id } = req.params;
  const detalle = await detalleService.getDetalleItinerarioById(parseInt(id));
  res.json(detalle);
});

detalleRoute.post("/crear", async (req, res) => {
  const detalle = req.body;
  const detalleCreated = await detalleService.createDetalleItinerario(detalle);
  res.json(detalleCreated);
});

detalleRoute.put("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const detalle = req.body;
  const detalleUpdated = await detalleService.updateItinerario(
    parseInt(id),
    detalle
  );
  res.json(detalleUpdated);
});

detalleRoute.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await detalleService.deleteItinerario(parseInt(id)));
});

module.exports = detalleRoute;
