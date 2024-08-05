const express = require("express");

const app = express();
const morgan = require("morgan");
const cors = require("cors");
const busRouter = require("./routes/bus.route");
const asientoRouter = require("./routes/asiento.route");
const choferRouter = require("./routes/chofer.route");
const itinerarioRouter = require("./routes/itinerario.route");
const usuarioRouter = require("./routes/usuario.route");
const detalleRouter = require("./routes/detalle.route");

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/bus", busRouter);
app.use("/asiento", asientoRouter);
app.use("/detalle", detalleRouter);
app.use("/itinerario", itinerarioRouter);
app.use("/chofer", choferRouter);
app.use("/usuario", usuarioRouter);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
