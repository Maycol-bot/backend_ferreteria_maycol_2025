
import { pool } from '../../db_connection.js';

// Obtener todos los usuarios
export const obtenerUsuarios = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM usuarios');
            res.json(result);
    } catch (error) {
    return res.status(500).json({
    mensaje: 'Ha ocurrido un error al leer los datos.',
    error: error
        });
    }
};


export const obtenerUsuario = async (req, res) => {
    try {
        const id_usuario = req.params.id;
        const [result] = await pool.query('SELECT * FROM usuarios WHERE id_usuario = ?', [id_usuario]);
        if (result.length <= 0) {
            return res.status(404).json({
                mensaje: `Error al leer los datos. ID ${id_usuario} no encontrado.`
            });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos de los usuarios.'
        });
    }
};

// Registrar una nueva usuario
export const registrarUsuario = async (req, res) => {
    try {
        const { nombre_usuario, descripcion_usuario } = req.body;
        const [result] = await pool.query(
            'INSERT INTO usuarios (nombre_usuario, descripcion_usuario) VALUES (?, ?)',
            [nombre_usuario, descripcion_usuario]
        );
        res.status(201).json({ id_usuario: result.insertId });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al registrar el usuario.',
            error: error
        });
    } };

    //eliminar detalle compra por id
export const eliminarUsuario = async (req, res) => {
    try {
        const id_usuario = req.params.id_usuario;
        const [result] = await pool.query("DELITE FROM usuario WHERE id_usuario = ?", [id_usuario]);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                mensaje: `Error al eliminar los datos. ID ${id_usuario} no encontrado.`
            });
        }
        //respuesta sin contenido para indicar exito
        res.status(204).send();
    }catch (error) {
        return res.status(500).json ({
            mensaje: `Error al eliminar la de usuario.`
        });
    }
};

// actualizar todos los usuarios
export const actualizarUsuarios = async (req, res) => {
    try {
        const id_usuario = req.params.id_usuario;
        const { nombre_usuario, descripcion_usuario } = req.body;
        const [result] = await pool.query(
            'UPDATE usuarios SET nombre_usuario = IFNULL(?, nombre_usuario), descripcion_usuario = IFNULL(?, descripcion_usuario) WHERE id_usuario = ?',
            [nombre_usuario, descripcion_usuario, id_usuario]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({
                mensaje: `Error al actualizar los datos. ID ${id_usuario} no encontrado.`
            });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos de las usuarios.'
        });
    }
};
