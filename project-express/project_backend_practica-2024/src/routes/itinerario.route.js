const { Router } = require("express");
const itinerarioService = require("../services/itinerario.service");

const itinerarioRoute = Router();

itinerarioRoute.get("/", async (req, res) => {
  res.json(await itinerarioService.getAllItinerarios());
});

itinerarioRoute.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await itinerarioService.getItinerarioById(parseInt(id)));
});

itinerarioRoute.post("/crear", async (req, res) => {
  const itinerario = req.body;
  res.json(await itinerarioService.createItinerario(itinerario));
});

itinerarioRoute.put("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const itinerario = req.body;
  res.json(await itinerarioService.updateItinerario(parseInt(id), itinerario));
});

itinerarioRoute.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await itinerarioService.deleteItinerario(parseInt(id)));
});

module.exports = itinerarioRoute;
