import { pool } from '../../db_connection.js';

// Obtener todos los detalles de compras
export const obtenerDetalle_compras = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM detalles_compras');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos.',
            error
        });
    }
};

// Obtener un detalle de compra por su ID
export const obtenerDetalle_compra = async (req, res) => {
    try {
        const id_detalle_compra = req.params.id_detalle_compra;
        const [result] = await pool.query(
            'SELECT * FROM detalles_compras WHERE id_detalle_compra = ?',
            [id_detalle_compra]
        );
        if (result.length <= 0) {
            return res.status(404).json({
                mensaje: `Error al leer los datos. ID ${id_detalle_compra} no encontrado.`
            });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos del detalle de compra.',
            error
        });
    }
};

// Registrar un nuevo detalle de compra
export const registrarDetalle_compra = async (req, res) => {
    try {
        const { id_compra, id_producto, cantidad, precio_unitario } = req.body;
        const [result] = await pool.query(
            'INSERT INTO detalles_compras (id_compra, id_producto, cantidad, precio_unitario) VALUES (?, ?, ?, ?)',
            [id_compra, id_producto, cantidad, precio_unitario]
        );
        res.status(201).json({ id_detalle_compra: result.insertId });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al registrar el detalle de compra.',
            error
        });
    }
};

// Eliminar un detalle de compra por ID
export const eliminarDetalle_compra = async (req, res) => {
    try {
        const id_detalle_compra = req.params.id_detalle_compra;
        const [result] = await pool.query(
            'DELETE FROM detalles_compras WHERE id_detalle_compra = ?',
            [id_detalle_compra]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                mensaje: `Error al eliminar. El ID ${id_detalle_compra} no fue encontrado.`
            });
        }

        res.status(204).send(); // éxito sin contenido
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al eliminar el detalle de compra.',
            error
        });
    }
};

// Actualizar un detalle de compra
export const actualizarDetalle_compra = async (req, res) => {
    try {
        const { id_detalle_compra } = req.params;
        const datos = req.body;

        const [result] = await pool.query(
            'UPDATE detalles_compras SET ? WHERE id_detalle_compra = ?',
            [datos, id_detalle_compra]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                mensaje: `Detalle de compra con ID ${id_detalle_compra} no encontrado.`
            });
        }

        res.status(200).json({
            mensaje: `Detalle de compra con ID ${id_detalle_compra} actualizado exitosamente.`
        });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al actualizar el detalle de compra.',
            error
        });
    }
};
