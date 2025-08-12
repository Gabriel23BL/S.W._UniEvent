import { conectado } from "../db/conexion.js";

export class ModeloUsuario {
    static async crearUsuario(nombre, correo, clave) {
        const query = `INSERT INTO usuario (nombre, correo, clave) VALUES (?, ?, ?)`;
        try {
            const conexion = conectado(); // Obtener la conexión activa
            await conexion.run(query, [nombre, correo, clave]); // Ejecutar la consulta
            return true;
        } catch (error) {
            console.log('Error, al crear usuario (modelo usuario): ' + error);
            return false;
        }
    }
}