import { pool } from '../../db_conecction.js';

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

// Obtener una venta por su ID
export const obtenerVenta = async (req, res) => {
try {
    const id_venta = req.params.id_producto;
const [result] = await pool.query('SELECT * FROM ventas WHERE id_venta = ?', [id_venta]);
if (result.length <= 0) {
return res.status(404).json({
mensaje: `Error al leer los datos. ID ${id_venta} no encontrado.`
});
}
res.json(result[0]);
} catch (error) {
return res.status(500).json({
mensaje: 'Ha ocurrido un error al leer los datos de las productos.'
});
}
};

// Registrar una nueva venta
export const registrarVenta = async (req, res) => {
try {
const { id_cliente ,id_empleado ,fecha_venta ,total_venta } = req.body;
const [result] = await pool.query(
'INSERT INTO usuarios (id_cliente ,id_empleado ,fecha_venta ,total_venta) VALUES (?,?,?,?)',
[id_cliente ,id_empleado ,fecha_venta ,total_venta]
);
res.status(201).json({ id_venta: result.insertId });
} catch (error) {
return res.status(500).json({
mensaje: 'Ha ocurrido un error al registrar las ventas.',
error: error
});
}
};

// Eliminar ventas por id 
export const eliminarVenta = async (req, res)=> {
    try{
        const id_producto = req.params.id_producto;
        const [result] = await pool.query('DELETE FROM ventas WHERE id_venta = ?',[id_venta]);

        if (result.affectedRows === 0 ){
            return res.status(404).json({
            mensaje: `Error al eliminar la venta. el ID ${id_venta} no fue encontrado.`
        });
    }

    //respuesta sin contenido para indicar exito
res.status(204).send();
}catch (error){
    return res.status(500).json({
        mensaje: 'Ha ocurrido un error al eliminar las ventas.',
        error: error
    });
}
};


// controlador para actualizar parcialmente una venta por su ID
export const actualizarVenta = async (req, res) => {
    try {
        const {id_venta} = req.params;
        const datos = req.body;

        const [result] = await pool.query(
            'UPDATE ventas SET ? WHERE id_venta = ?',
            [datos, id_venta]
        );
        if (result.affectedRows === 0){
            return res.status(404).json({
                mensaje: `ventas con ID ${id_venta} no encotntrada.`
            });
        }
        res.status(200).json({
            mensaje: `ventas con ID ${id_venta} actualizada exitosamente.`
        });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al actualizar las ventas.',
            error: error
        });
    }
};