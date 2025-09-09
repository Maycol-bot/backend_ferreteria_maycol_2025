
import { pool } from '../../db_connection.js';

// Obtener todos los productos
export const obtenerProductos = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM productos');
            res.json(result);
    } catch (error) {
    return res.status(500).json({
    mensaje: 'Ha ocurrido un error al leer los datos.',
    error: error
        });
    }
};


export const obtenerProducto = async (req, res) => {
    try {
        const id_producto = req.params.id;
        const [result] = await pool.query('SELECT * FROM productos WHERE id_producto = ?', [id_producto]);
        if (result.length <= 0) {
            return res.status(404).json({
                mensaje: `Error al leer los datos. ID ${id_producto} no encontrado.`
            });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos de las categorias.'
        });
    }
};

// Registrar una nueva detalle producto
export const registrarProducto = async (req, res) => {
    try {
        const { nombre_producto, descripcion_producto } = req.body;
        const [result] = await pool.query(
            'INSERT INTO productos (nombre_producto, descripcion_producto) VALUES (?, ?)',
            [nombre_producto, descripcion_producto]
        );
        res.status(201).json({ id_producto: result.insertId });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al registrar el producto.',
            error: error
        });
    }};