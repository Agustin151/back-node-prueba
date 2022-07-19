require("dotenv").config();
const cors = require("cors");
const express = require("express");
const routes = require("./routes");
const dbInitialSetup = require("./dbInitialSetup");
const APP_PORT = process.env.APP_PORT || 8000;
const app = express();
app.use(cors());
routes(app);

const getStart = async () => {
  //await dbInitialSetup(); // Crea tablas e inserta datos de prueba.
};
getStart();

app.listen(APP_PORT, () =>
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}!\n`)
);
