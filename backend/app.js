const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const compression = require("compression");
const dotenv = require("dotenv");
dotenv.config(); // permitimos que todas las rutas accedan a las variables de entorno

const { dbConnection } = require("./database/config");
dbConnection();

const houses = require("./routes/houses");
const characters = require("./routes/characters");

const app = express();

app.use(cors()); // Enabled cors
app.use(compression()); // Enabled compression
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/* Rutas de la aplicacion */
app.use("/api/houses", houses);
app.use("/api/characters", characters);

app.use(function (req, res, next) {
  console.error("ruta no encontrada");
});

app.use(function (err, req, res, next) {
  console.error(err);
});

module.exports = app;
