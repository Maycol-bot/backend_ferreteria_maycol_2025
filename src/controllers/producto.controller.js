import { pool } from '../../db_conecction.js';

// Obtener todas las productos
export const obtenerProductos = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM productos');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos.',
            error: error
        });
    }
};

// Obtener un producto por su ID
export const obtenerProducto = async (req, res) => {
try {
    const id_producto = req.params.id_producto;
const [result] = await pool.query('SELECT * FROM Productos WHERE id_producto = ?', [id_producto]);
if (result.length <= 0) {
return res.status(404).json({
mensaje: `Error al leer los datos. ID ${id_producto} no encontrado.`
});
}
res.json(result[0]);
} catch (error) {
return res.status(500).json({
mensaje: 'Ha ocurrido un error al leer los datos de las productos.'
});
}
};

// Registrar una nueva productos
export const registrarProducto = async (req, res) => {
try {
const { nombre_producto ,descripcion_producto ,id_categoria ,precio_unitario ,stock ,imagen } = req.body;
const [result] = await pool.query(
'INSERT INTO categorias (nombre_producto ,descripcion_producto ,id_categoria ,precio_unitario ,stock ,imagen) VALUES (?, ?, ?, ?, ?, ?)',
[nombre_producto ,descripcion_producto ,id_categoria ,precio_unitario ,stock ,imagen]
);
res.status(201).json({ id_producto: result.insertId });
} catch (error) {
return res.status(500).json({
mensaje: 'Ha ocurrido un error al registrar los productos.',
error: error
});
}
};

// Eliminar productos por id 
export const eliminarProducto = async (req, res)=> {
    try{
        const id_producto = req.params.id_producto;
        const [result] = await pool.query('DELETE FROM productos WHERE id_producto = ?',[id_producto]);

        if (result.affectedRows === 0 ){
            return res.status(404).json({
            mensaje: `Error al eliminar la producto. el ID ${id_producto} no fue encontrado.`
        });
    }

    //respuesta sin contenido para indicar exito
res.status(204).send();
}catch (error){
    return res.status(500).json({
        mensaje: 'Ha ocurrido un error al eliminar los productos.',
        error: error
    });
}
};


// controlador para actualizar parcialmente una producto por su ID
export const actualizarProducto = async (req, res) => {
    try {
        const {id_producto} = req.params;
        const datos = req.body;

        const [result] = await pool.query(
            'UPDATE productos SET ? WHERE id_producto = ?',
            [datos, id_producto]
        );
        if (result.affectedRows === 0){
            return res.status(404).json({
                mensaje: `productos con ID ${id_producto} no encotntrada.`
            });
        }
        res.status(200).json({
            mensaje: `Productos con ID ${id_producto} actualizada exitosamente.`
        });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al actualizar los productos.',
            error: error
        });
    }
};