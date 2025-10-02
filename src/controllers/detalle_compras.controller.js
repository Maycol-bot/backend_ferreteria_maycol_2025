
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

// Registrar una nueva detalle compra
export const registrarDetalle_Compra = async (req, res) => {
    try {
        const { nombre_detalle_compra, descripcion_detalle_compra} = req.body;
        const [result] = await pool.query(
            'INSERT INTO detalle_compras (nombre_detalle_compra, descripcion_detalle_compra) VALUES (?, ?)',
            [nombre_detalle_compra, descripcion_detalle_compra]
        );
        res.status(201).json({ id_detalle_compra: result.insertId });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al registrar el detalle de compra.',
            error: error
        });
    }
};

//eliminar detalle compra por id
export const eliminarDetalle_Compra = async (req, res) => {
    try {
        const id_detalle_compra = req.params.id_detalle_compra;
        const [result] = await pool.query("DELITE FROM detalle_compra WHERE id_detalle_compra = ?", [id_detalle_compra]);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                mensaje: `Error al eliminar los datos. ID ${id_detalle_compra} no encontrado.`
            });
        }
        //respuesta sin contenido para indicar exito
        res.status(204).send();
    }catch (error) {
        return res.status(500).json ({
            mensaje: `Error al eliminar la de detalle compra.`
        });
    }
};