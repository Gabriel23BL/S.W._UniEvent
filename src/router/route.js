import { Router } from "express";
import { ControladorUsuario } from "../Controller/ControllerUsuario.js";

export const rutas = Router();

/** / Esta es la ruta raiz del proyecto */
rutas.get("/", (req, res) => {
  res.render("index", { titulo: "Inicio"});
});

/** /registro se encarga de mostrar la vista del registro de usuario */
rutas.get("/registro-usuario", (req, res) => {
  res.render("registroUsuario", { titulo: "Crear usuario" });
});

rutas.get("/login", (req, res) => {
  res.render("login", { titulo: "Crear usuario" });
});

rutas.get("/sisten", (req, res) => {  
  res.render("sisten", { titulo: "Crear usuario" });
});

rutas.post("/api/registro-usuario", ControladorUsuario.crearUsuario);