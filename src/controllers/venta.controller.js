// controllers/venta.controller.js
import { pool } from '../../db_connection.js';

// Obtener todas las ventas
export const obtenerVentas = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM ventas');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Error al obtener ventas.',
            error: error.message
        });
    }
};

// Registrar una nueva venta
export const registrarVenta = async (req, res) => {
    try {
        const { id_cliente, id_empleado, fecha_venta, total_venta } = req.body;

        const [result] = await pool.query(
            `INSERT INTO ventas (id_cliente, id_empleado, fecha_venta, total_venta) 
             VALUES (?, ?, ?, ?)`,
            [id_cliente, id_empleado, fecha_venta, total_venta]
        );

        res.status(201).json({ 
            mensaje: "Venta registrada con éxito",
            id_venta: result.insertId 
        });
    } catch (error) {
        console.error("Error al registrar venta:", error);
        return res.status(500).json({
            mensaje: 'Error al registrar la venta.',
            error: error.message
        });
    }
};

// controllers/venta.controller.js → actualizarVenta
export const actualizarVenta = async (req, res) => {
    try {
        const { id_venta } = req.params;
        const { id_cliente, id_empleado, fecha_venta, total_venta } = req.body;

        console.log("Actualizando venta:", { id_venta, id_cliente, id_empleado, fecha_venta, total_venta });

        if (!id_cliente || !id_empleado || !fecha_venta || !total_venta) {
            return res.status(400).json({ mensaje: "Todos los campos son obligatorios" });
        }

        const [result] = await pool.query(
            `UPDATE ventas
             SET id_cliente = ?,
                 id_empleado = ?,
                 fecha_venta = ?,
                 total_venta = ?
             WHERE id_venta = ?`,
            [id_cliente, id_empleado, fecha_venta, total_venta, id_venta]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                mensaje: `No se encontró la venta con ID ${id_venta}. Verifica que exista.`
            });
        }

        res.json({ mensaje: `Venta ${id_venta} actualizada con éxito.` });
    } catch (error) {
        console.error("ERROR EN BD:", error);
        return res.status(500).json({
            mensaje: 'Error interno al actualizar la venta.',
            error: error.message,
            sqlError: error.sqlMessage || error.code
        });
    }
};

// Eliminar venta
export const eliminarVenta = async (req, res) => {
    try {
        const { id_venta } = req.params;
        const [result] = await pool.query('DELETE FROM ventas WHERE id_venta = ?', [id_venta]);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                mensaje: `Venta con ID ${id_venta} no encontrada.`
            });
        }

        res.status(204).send(); // Éxito sin contenido
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Error al eliminar la venta.',
            error: error.message
        });
    }
};