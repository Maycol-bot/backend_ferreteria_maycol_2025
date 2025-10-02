
import { pool } from '../../db_connection.js';

// Obtener todas las ventas
export const obtenerVentas = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM ventas');
            res.json(result);
    } catch (error) {
    return res.status(500).json({
    mensaje: 'Ha ocurrido un error al leer los datos.',
    error: error
        });
    }
};

export const obtenerVenta = async (req, res) => {
    try {
        const id_Venta = req.params.id;
        const [result] = await pool.query('SELECT * FROM ventas WHERE id_Venta = ?', [id_Venta]);
        if (result.length <= 0) {
            return res.status(404).json({
                mensaje: `Error al leer los datos. ID ${id_Venta} no encontrado.`
            });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos de las ventas.'
        });
    }
};

// Registrar una nueva venta
export const registrarVenta = async (req, res) => {
    try {
        const { nombre_Venta, descripcion_Venta } = req.body;
        const [result] = await pool.query(
            'INSERT INTO ventas (nombre_Venta, descripcion_Venta) VALUES (?, ?)',
            [nombre_Venta, descripcion_Venta]
        );
        res.status(201).json({ id_Venta: result.insertId });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al registrar la venta.',
            error: error
        });
    } };

//eliminar detalle compra por id
export const eliminarVenta = async (req, res) => {
    try {
        const id_venta = req.params.id_venta;
        const [result] = await pool.query("DELITE FROM venta WHERE id_venta = ?", [id_venta]);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                mensaje: `Error al eliminar los datos. ID ${id_venta} no encontrado.`
            });
        }
        //respuesta sin contenido para indicar exito
        res.status(204).send();
    }catch (error) {
        return res.status(500).json ({
            mensaje: `Error al eliminar la de venta.`
        });
    }
};

// actualizar venta por id
export const actualizarVenta = async (req, res) => {
    try {
        const id_venta = req.params.id_venta;
        const { nombre_venta, descripcion_venta } = req.body;
        const [result] = await pool.query(
            'UPDATE ventas SET nombre_venta = ?, descripcion_venta = ? WHERE id_venta = ?',
            [nombre_venta, descripcion_venta, id_venta]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({
                mensaje: `Error al actualizar los datos. ID ${id_venta} no encontrado.`
            });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos de las ventas.'
        });
    }
};