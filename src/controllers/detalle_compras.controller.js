
import { pool } from '../../db_connection.js';

// Obtener todas las compras
export const obtenerDetalleCompras = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM detalle_compras');
            res.json(result);
    } catch (error) {
    return res.status(500).json({
    mensaje: 'Ha ocurrido un error al leer los datos.',
    error: error
        });
    }
};

export const obtenerDetalleCompra = async (req, res) => {
try {
const id_detalle_compra = req.params.id;
const [result] = await pool.query('SELECT * FROM detalle_compras WHERE id_detalle_compra = ?', [id_detalle_compra]);
if (result.length <= 0) {
return res.status(404).json({
mensaje: `Error al leer los datos. ID ${id_detalle_compra} no encontrado.`
});
}
res.json(result[0]);
} catch (error) {
return res.status(500).json({
mensaje: 'Ha ocurrido un error al leer los datos de las compras.'
});
}
};