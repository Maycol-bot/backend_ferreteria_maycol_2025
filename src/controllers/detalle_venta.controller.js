import { pool } from '../../db_conecction.js';
// Obtener todas las Detalles_ventas
export const obtenerDetalles_ventas = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM detalles_ventas');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos.',
            error: error
        });
    }
};


// Obtener una Detalle_ventas por su ID
export const obtenerDetalle_venta = async (req, res) => {
try {
    const id_detalle_venta = req.params.id_categoria;
const [result] = await pool.query('SELECT * FROM detalles_ventas WHERE id_detalle_venta = ?', [id_detalle_venta]);
if (result.length <= 0) {
return res.status(404).json({
mensaje: `Error al leer los datos. ID ${id_detalle_venta} no encontrado.`
});
}
res.json(result[0]);
} catch (error) {
return res.status(500).json({
mensaje: 'Ha ocurrido un error al leer los datos de los detalles_ventas.'
});
}
};

// Registrar un nuevo detalle_ventas
export const registrarDetalle_venta = async (req, res) => {
try {
const { id_venta, id_producto, cantidad, precio_unitario } = req.body;
const [result] = await pool.query(
'INSERT INTO categorias (id_venta, id_producto, cantidad, precio_unitario ) VALUES (?, ?, ?, ?)',
[id_venta, id_producto, cantidad, precio_unitario ]
);
res.status(201).json({ id_detalle_venta: result.insertId });
} catch (error) {
return res.status(500).json({
mensaje: 'Ha ocurrido un error al registrar los detalles_ventas.',
error: error
});
}
};

// Eliminar los detalles_ventas por id 
export const eliminarDetalle_venta = async (req, res)=> {
    try{
        const id_categoria = req.params.id_detalle_venta;
        const [result] = await pool.query('DELETE FROM detalles_ventas WHERE id_detalle_venta = ?',[id_detalle_venta]);

        if (result.affectedRows === 0 ){
            return res.status(404).json({
            mensaje: `Error al eliminar los detalles_ventas. el ID ${id_detalle_venta} no fue encontrado.`
        });
    }

    //respuesta sin contenido para indicar exito
res.status(204).send();
}catch (error){
    return res.status(500).json({
        mensaje: 'Ha ocurrido un error al eliminar los detalles_ventas.',
        error: error
    });
}
};

// Actualizar Categoria por ID
export const actualizarDetalle_venta = async (req, res) => {
    try{
        const id_detalle_venta = req.params.id_detalle_venta;
        const { id_venta, id_producto, cantidad, precio_unitario  } = req.body;

        const [result] = await pool.query(
            'UPDATE detalles_ventas SET id_venta = IFNULL(?, id_venta), id_producto = IFNULL(?, id_producto), cantidad = IFNULL(?,cantidad), precio_unitario WHERE id_categoria = ?',
            [id_venta, id_producto,cantidad,precio_unitario, id_detalle_venta] 
        );
        if (result.affectedRows === 0){
            return res.status(404).json({
                mensaje: `Error al actualizar los detalles_ventas. El ID ${id_detalle_venta} no fue encontrado.`
            });
        }
        res.sendStatus(200).json({
            mensaje:`Categoria con ID ${id_detalle_venta} actualizado exitosamente.`
        });
    }catch (error){
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al actualizar la categoria.',
            error: error
        });
    }
};

// controlador para actualizar parcialmente una categoria por su ID
export const actualizarDetalle_ventapatch = async (req, res) => {
    try {
        const {id_detalle_venta} = req.params;
        const datos = req.body;

        const [result] = await pool.query(
            'UPDATE detalles_ventas SET ? WHERE id_detalle_venta = ?',
            [datos, id_detalle_venta]
        );
        if (result.affectedRows === 0){
            return res.status(404).json({
                mensaje: `detalles_ventas con ID ${id_detalle_venta} no encotntrada.`
            });
        }
        res.status(200).json({
            mensaje: `detalles_ventas con ID ${id_detalle_venta} actualizada exitosamente.`
        });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al actualizar el detalles_ventas.',
            error: error
        });
    }
};