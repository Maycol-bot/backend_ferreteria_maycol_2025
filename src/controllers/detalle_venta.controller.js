
import { pool } from '../../db_connection.js';

// Obtener todas los detalle ventas
export const obtenerDetalleVentas = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM detalle_ventas');
            res.json(result);
    } catch (error) {
    return res.status(500).json({
    mensaje: 'Ha ocurrido un error al leer los datos.',
    error: error
        });
    }
};

export const obtenerDetalleVenta = async (req, res) => {
    try {
        const id_detalle_venta = req.params.id;
        const [result] = await pool.query('SELECT * FROM detalle_ventas WHERE id_detalle_venta = ?', [id_detalle_venta]);
        if (result.length <= 0) {
            return res.status(404).json({
                mensaje: `Error al leer los datos. ID ${id_detalle_venta} no encontrado.`
            });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos de las ventas.'
        });
    }
};

// Registrar una nueva detalle venta
export const registrarDetalle_Venta = async (req, res) => {
    try {
        const { nombre_detalle_venta, descripcion_detalle_venta} = req.body;
        const [result] = await pool.query(
            'INSERT INTO detalle_ventas (nombre_detalle_venta, descripcion_detalle_venta) VALUES (?, ?)',
            [nombre_detalle_venta, descripcion_detalle_venta]
        );
        res.status(201).json({ id_detalle_venta: result.insertId });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al registrar el detalle de venta.',
            error: error
        });
    } };