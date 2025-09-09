
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
        const [result] = await pool.query('SELECT * FROM categorias WHERE id_compra = ?', [id_compra]);
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