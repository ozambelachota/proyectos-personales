const { Router } = require("express");

const asientoRoute = Router();

const asientoService = require("../services/asiento.service");

asientoRoute.get("/", async (req, res) => {
  res.json(await asientoService.getAllAsientos());
});

asientoRoute.get("/:idBus", async (req, res) => {
  const { idBus } = req.params;
  res.json(await asientoService.getAsientosIdBus(parseInt(idBus)));
});

asientoRoute.delete("/delete/:idBus", async (req, res) => {
  const { idBus } = req.params;
  res.json(await asientoService.deleteAsiento(parseInt(idBus)));
});

asientoRoute.post("/crear", async (req, res) => {
  const { idBus, cantidad } = req.body;
  res.json(await asientoService.createAsiento(idBus, cantidad));
});

module.exports = asientoRoute;
