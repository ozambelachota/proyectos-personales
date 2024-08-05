const { Router } = require("express");

const busRoute = Router();

const busService = require("../services/bus.service");

busRoute.get("/", async (req, res) => {
  res.json(await busService.getAllBuses());
});

busRoute.get("/:idBus", async (req, res) => {
  const { idBus } = req.params;
  res.json(await busService.getBusById(parseInt(idBus)));
});

busRoute.post("/crear", async (req, res) => {
  const { placa, marca, modelo, asientos } = req.body;
  res.json(
    await busService.crearBus({
      placa,
      marca,
      modelo,
      asientos,
    })
  );
});

busRoute.put("/update/:idBus", async (req, res) => {
  const { idBus } = req.params;
  const { placa, marca, modelo, asientos } = req.body;
  res.json(
    await busService.updateBus(parseInt(idBus), {
      placa,
      marca,
      modelo,
      asientos,
    })
  );
});

busRoute.delete("/delete/:idBus", async (req, res) => {
  const { idBus } = req.params;
  res.json(await busService.deleteBus(parseInt(idBus)));
});

busRoute.get('/itinerario/bus', async (req, res) => {
  res.json(await busService.getBusWhithItinerario());
})

module.exports = busRoute;
