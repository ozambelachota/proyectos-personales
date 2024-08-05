import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import asientoRouter from "./controllers/asientoControlador.js";
import busRouter from "./controllers/busControlador.js";
import choferRouter from "./controllers/choferControlador.js";
import itinerarioRouter from "./controllers/itinerarioControlador.js";
import iterarioDetalleRouter from "./controllers/itinerarioDetalleControlador.js";
import rolRouter from "./controllers/rolControlador.js";
import usuarioRouter from "./controllers/usuarioControlador.js";

dotenv.config();

const app = express();

app.use(cors({ origin: "*" }));
app.use(morgan("dev"));
app.use(express.json());

app.use("/bus", busRouter);
app.use("/asiento", asientoRouter);
app.use("/usuario", usuarioRouter);
app.use("/rol", rolRouter);
app.use("/itinerario", itinerarioRouter);
app.use("/detalle", iterarioDetalleRouter);
app.use("/chofer", choferRouter);
app.use((req, res, next) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

app.listen(3500, () => {
  console.log("localhost: 3500");
});
