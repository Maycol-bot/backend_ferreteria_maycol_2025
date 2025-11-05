import { pool } from '../../db_conecction.js';
// Obtener todas las detalles_compras
export const obtenerDetalles_compras = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM detalles_compras');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos.',
            error: error
        });
    }
};


// Obtener una Detalle_Compra por su ID
export const obtenerDetalle_compra = async (req, res) => {
try {
    const id_detalles_compra = req.params.id_categoria;
const [result] = await pool.query('SELECT * FROM detalles_compras WHERE id_detalle_compra = ?', [id_detalles_compra]);
if (result.length <= 0) {
return res.status(404).json({
mensaje: `Error al leer los datos. ID ${id_detalles_compra} no encontrado.`
});
}
res.json(result[0]);
} catch (error) {
return res.status(500).json({
mensaje: 'Ha ocurrido un error al leer los datos de los detalles de las compras.'
});
}
};


// Registrar un nuevo detalle compra
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
            mensaje: 'Ha ocurrido un error al registrar los detalles de compras.',
            error: error
        });
    }
};



// Eliminar detalles de compras por id 
export const eliminarDetalle_compra = async (req, res)=> {
    try{
        const id_compra = req.params.id_compra;
        const [result] = await pool.query('DELETE FROM detalles_compras WHERE id_compra = ?',[id_compra]);

        if (result.affectedRows === 0 ){
            return res.status(404).json({
            mensaje: `Error al eliminar la compra. el ID ${id_compra} no fue encontrado.`
        });
    }

    //respuesta sin contenido para indicar exito
res.status(204).send();
}catch (error){
    return res.status(500).json({
        mensaje: 'Ha ocurrido un error al eliminar la compra.',
        error: error
    });
}
};


// controlador para actualizar parcialmente una categoria por su ID
export const actualizarDetalle_compra = async (req, res) => {
    try {
        const {id_detalle_compra} = req.params;
        const datos = req.body;

        const [result] = await pool.query(
            'UPDATE detalles_compras SET ? WHERE id_detalle_compra = ?',
            [datos, id_detalle_compra]
        );
        if (result.affectedRows === 0){
            return res.status(404).json({
                mensaje: `detalles_compras con ID ${id_detalle_compra} no encontrada.`
            });
        }
        res.status(200).json({
            mensaje: `detalles_compras con ID ${id_detalle_compra} actualizada exitosamente.`
        });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al actualizar los detalles de compras.',
            error: error
        });
    }
};
