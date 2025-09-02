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


/* Vista Login*/
rutas.get("/login", (req, res) => {
  res.render("login", { titulo: "Iniciar secion" });
});

/* Vista Recuperar clave*/
rutas.get("/recuperar-clave", (req, res) => {
  res.render("recuperarClave", { titulo: "Recuperar clave" });
});


/* Vista Inicio*/
rutas.get("/sisten-inicio", (req, res) => {  
  res.render("sistenInicio");
});

/* Vista Eventos*/
rutas.get("/sisten-eventos", (req, res) => {  
  res.render("sistenEventos");
});

/* vista comprar Eventos */
rutas.get("/sisten-comprar-eventos", (req, res) => {  
  res.render("sistenEventoCompra");
});

/* Vista CRUD Eventos*/
rutas.get("/sisten-crud-eventos", (req, res) => {   
  res.render("sistenEventCrud");
}); 


/* Vista mis eventos*/
rutas.get("/sisten-mis-eventos", (req, res) => {  
  res.render("sistenMisEventos");
});

/* Vista Estadisticas*/
rutas.get("/sisten-estadisticas", (req, res) => {  
  res.render("sistenEstadisticas");
});

/* Vita Mi Perfil*/
rutas.get("/sisten-mi-perfil", (req, res) => {  
  res.render("sistenMiPerfil");
});


/* Vista Mis Certificados*/
rutas.get("/sisten-mis-certificados", (req, res) => {  
  res.render("sistenMisCertificados");
}); 

rutas.post("/api/registro-usuario", ControladorUsuario.crearUsuario);