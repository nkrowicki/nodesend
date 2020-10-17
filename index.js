const express = require("express");
const conectarDB = require("./config/db");

// Crear server
const app = express();

// Conectar a la base de datos
conectarDB();

console.log("Comenzando Node Send");

// Puerto de la app
const port = process.env.PORT || 4000;

app.listen(port, "0.0.0.0", () => {
  console.log(`Server up in port ${port}`);
});
