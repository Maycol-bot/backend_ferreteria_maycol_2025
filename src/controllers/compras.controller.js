
import { pool } from '../../db_connection.js';

// Obtener todas las compras
export const obtenerCompras = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM Compras');
            res.json(result);
    } catch (error) {
    return res.status(500).json({
    mensaje: 'Ha ocurrido un error al leer los datos.',
    error: error
        });
    }
};

export const obtenerCompra = async (req, res) => {
    try {
        const id_compra = req.params.id;
        const [result] = await pool.query('SELECT * FROM compras WHERE id_compra = ?', [id_compra]);
        if (result.length <= 0) {
            return res.status(404).json({
                mensaje: `Error al leer los datos. ID ${id_compra} no encontrado.`
            });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos de las compras.'
        });
    }
};

// Registrar una nueva compra
export const registrarCompra = async (req, res) => {
    try {
        const { nombre_compra, descripcion_compra } = req.body;
        const [result] = await pool.query(
            'INSERT INTO compra (nombre_compra, descripcion_compra) VALUES (?, ?)',
            [nombre_compra, descripcion_compra]
        );
        res.status(201).json({ id_compra: result.insertId });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al registrar la compra.',
            error: error
        });
    }
};