
import { pool } from '../../db_connection.js';

// Obtener todos los clientes
export const obtenerClientes = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM Clientes');
            res.json(result);
    } catch (error) {
    return res.status(500).json({
    mensaje: 'Ha ocurrido un error al leer los datos.',
    error: error
        });
    }
};

export const obtenerCliente = async (req, res) => {
    try {
        const id_cliente = req.params.id;
        const [result] = await pool.query('SELECT * FROM clientes WHERE id_cliente = ?', [id_cliente]);
        if (result.length <= 0) {
            return res.status(404).json({
                mensaje: `Error al leer los datos. ID ${id_cliente} no encontrado.`
            });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos de los clientes.'
        });
    }
};

// Registrar una nueva cliente
export const registrarCliente = async (req, res) => {
    try {
        const { nombre_cliente, descripcion_cliente } = req.body;
        const [result] = await pool.query(
            'INSERT INTO clientes (nombre_cliente, descripcion_cliente) VALUES (?, ?)',
            [nombre_cliente, descripcion_cliente]
        );
        res.status(201).json({ id_cliente: result.insertId });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al registrar la categoría.',
            error: error
        });
    }
};

//eliminar cliente por id
export const eliminarCliente = async (req, res) => {
    try {
        const id_cliente = req.params.id_categoria;
        const [result] = await pool.query("DELITE FROM cliente WHERE id_cliente = ?", [id_cliente]);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                mensaje: `Error al eliminar los datos. ID ${id_cliente} no encontrado.`
            });
        }
        //respuesta sin contenido para indicar exito
        res.status(204).send();
    }catch (error) {
        return res.status(500).json ({
            mensaje: `Error al eliminar la cliente.`
        });
    }
};

// Actualizar cliente por ID
export const actualizarCliente = async (req, res) => {
    try{
        const id_cliente = req.params.id_cliente;
        const {nombre_cliente, descripcion_cliente} = req.body; 
        const [result] = await pool.query (
            'UPDATE cliente SET nombre_cliente = IFNULL(?, nombre_cliente), descripcion_cliente = IFNULL(?, descripcion_cliente) WHERE id_cliente = ?',
            [nombre_cliente, descripcion_cliente, id_cliente]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({
                mensaje: `Error al actualizar los datos. ID ${id_cliente} no encontrado.`
            });
        }
    }catch (error) {
        return res.status(500).json ({
            mensaje: `Error al actualizar la cliente.`
        });
    }
};