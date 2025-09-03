
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