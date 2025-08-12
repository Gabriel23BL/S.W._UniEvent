import { ModeloUsuario } from "../Model/ModelUsuario.js";

export class ControladorUsuario {
  static async crearUsuario(req, res) {
    try {
      const { nombre, correo, clave } = req.body;

      console.log(nombre, correo, clave);

      const usuarioCreado = await ModeloUsuario.crearUsuario(
        nombre,
        correo,
        clave
      );

      if (!usuarioCreado) {
        return res.status(400).json({
          status: "error",
          message: "Error, no se creo el usuario...",
        });
      } else {
        return res.status(201).json({
          status: "ok",
          message: "Usuario creado con exito...",
        });
      }
    } catch (error) {
      console.log("Error, al crear usuario: " + error);
    }
  }
}
