import { pool } from '../../db_conecction.js';
// Obtener todas las compras
export const obtenerCompras = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM compras');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos.',
            error: error
        });
    }
};


// Obtener una compras por su ID
export const obtenerCompra = async (req, res) => {
    try {
        const id_compra = req.params.id_compra;
        const [result] = await pool.query('SELECT * FROM compras WHERE id_compra = ?', [id_compra]);
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

// Registrar una nueva compra
export const registrarCompra = async (req, res) => {
    try {
        const {id_empleado, fecha_compra, total_compra } = req.body;
        const [result] = await pool.query(
            'INSERT INTO compras (id_empleado,fecha_compra,total_compra) VALUES (?, ?, ?)',
            [id_empleado, fecha_compra, total_compra]
        );
        res.status(201).json({ id_compra: result.insertId });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al registrar las compras.',
            error: error
        });
    }
};


// Eliminar compras por id 
export const eliminarCompra = async (req, res)=> {
    try{
        const id_compra = req.params.id_compra;
        const [result] = await pool.query('DELETE FROM compras WHERE id_compra = ?',[id_compra]);

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


// controlador para actualizar parcialmente una compra por su ID
export const actualizarCompra = async (req, res) => {
    try {
        const {id_compra} = req.params;
        const datos = req.body;

        const [result] = await pool.query(
            'UPDATE compras SET ? WHERE id_compra = ?',
            [datos, id_compra]
        );
        if (result.affectedRows === 0){
            return res.status(404).json({
                mensaje: `compras con ID ${id_compra} no encontrada.`
            });
        }
        res.status(200).json({
            mensaje: `Compras con ID ${id_compra} actualizada exitosamente.`
        });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al actualizar la compra.',
            error: error
        });
    }
};
