// controllers/usuario.controller.js
import { pool } from '../../db_connection.js';

export const obtenerUsuarios = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM usuarios');
        res.json(result);
    } catch (error) {
        return res.status(500).json({ mensaje: 'Error al obtener usuarios', error: error.message });
    }
};

export const registrarUsuario = async (req, res) => {
    try {
        const { usuario, contrasena } = req.body;
        const [result] = await pool.query(
            'INSERT INTO usuarios (usuario, contrasena) VALUES (?, ?)',
            [usuario, contrasena]
        );
        res.status(201).json({ id_usuario: result.insertId });
    } catch (error) {
        return res.status(500).json({ mensaje: 'Error al registrar usuario', error: error.message });
    }
};

// controllers/usuario.controller.js
export const actualizarUsuario = async (req, res) => {
  try {
    const { id_usuario } = req.params;
    const { usuario, contrasena } = req.body;

    // Validación básica
    if (!usuario || usuario.trim() === "") {
      return res.status(400).json({ mensaje: "El nombre de usuario es obligatorio" });
    }

    let query, params;

    if (contrasena && contrasena.trim() !== "") {
      // Si hay contraseña nueva → actualizar ambos campos
      query = 'UPDATE usuarios SET usuario = ?, contrasena = ? WHERE id_usuario = ?';
      params = [usuario.trim(), contrasena.trim(), id_usuario];
    } else {
      // Si NO hay contraseña → solo actualizar el nombre de usuario
      query = 'UPDATE usuarios SET usuario = ? WHERE id_usuario = ?';
      params = [usuario.trim(), id_usuario];
    }

    const [result] = await pool.query(query, params);

    if (result.affectedRows === 0) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    res.json({ mensaje: 'Usuario actualizado correctamente' });
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    return res.status(500).json({ 
      mensaje: 'Error interno del servidor', 
      error: error.message 
    });
  }
};

export const eliminarUsuario = async (req, res) => {
    try {
        const { id_usuario } = req.params;
        const [result] = await pool.query('DELETE FROM usuarios WHERE id_usuario = ?', [id_usuario]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
        res.status(204).send();
    } catch (error) {
        return res.status(500).json({ mensaje: 'Error al eliminar', error: error.message });
    }
};