import sqlite3 from "sqlite3";
import { open } from "sqlite";

// Crear la conexión global
let db = null;

// Función para inicializar la conexión
export const conexion = async () => {
  try {
    db = await open({
      filename: "./src/db/uniEvent.db", // Ruta al archivo SQLite
      driver: sqlite3.Database,
    });
    return { estado: true, mensaje: "Conexión exitosa." }; // Devuelve un estado exitoso
  } catch (error) {
    // Imprime el mensaje del error en el servidor
    console.log("Error al conectar con SQLite:", error.message);
    return {
      estado: false,
      mensaje: "Error al conectar con SQLite: " + error.message,
    }; // Devuelve un estado de error
  }
};

// Función para obtener la conexión
export const conectado = () => {
  if (!db) {
    throw new Error("La conexión a la base de datos no ha sido inicializada.");
  }
  return db;
};
