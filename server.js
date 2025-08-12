import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { rutas } from "./src/router/route.js";
import { conexion } from "./src/db/conexion.js";

const app = express();
const port = process.env.PORT || 4000;

// Servir el favicon
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/favicon.ico", express.static(path.join(__dirname, "favicon.ico")));
app.use(express.static(path.join(__dirname, "public")));

// Configurar el motor de plantillas EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/view"));

app.use(express.json());
app.use(rutas);

(async () => {
  const resultado = await conexion();
  if (resultado.estado) {
    console.log(resultado.mensaje);
  } else {
    console.error(resultado.mensaje);
    process.exit(1);
  }
})();

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto: ${port}`);
});
