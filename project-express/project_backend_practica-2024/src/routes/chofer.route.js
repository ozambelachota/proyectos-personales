const choferService = require("../services/chofer.service");
const { Router } = require("express");

const choferRoute = Router();

choferRoute.get("/", async (req, res) => {
  const chofer = await choferService.getAllChoferes();
  res.json(chofer);
});

choferRoute.get("/:id", async (req, res) => {
  const { id } = req.params;
  const chofer = await choferService.getChoferById(parseInt(id));
  res.json(chofer);
});

choferRoute.post("/crear", async (req, res) => {
  const chofer = req.body;
  const choferCreated = await choferService.createChofer(chofer);
  res.json(choferCreated);
});

choferRoute.put("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const chofer = req.body;
  const choferUpdated = await choferService.updateChofer(parseInt(id), chofer);
  res.json(choferUpdated);
});

choferRoute.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const choferDeleted = await choferService.deleteChofer(parseInt(id));
  res.json(choferDeleted);
});

module.exports = choferRoute;
