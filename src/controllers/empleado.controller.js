
import { pool } from '../../db_connection.js';

// Obtener todos los empleados
export const obtenerEmpleados = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM empleados');
            res.json(result);
    } catch (error) {
    return res.status(500).json({
    mensaje: 'Ha ocurrido un error al leer los datos.',
    error: error
        });
    }
};

export const obtenerEmpleado = async (req, res) => {
try {
const id_empleado = req.params.id;
const [result] = await pool.query('SELECT * FROM empleados WHERE id_empleado = ?', [id_empleado]);
if (result.length <= 0) {
return res.status(404).json({
mensaje: `Error al leer los datos. ID ${id_empleado} no encontrado.`
});
}
res.json(result[0]);
} catch (error) {
return res.status(500).json({
mensaje: 'Ha ocurrido un error al leer los datos de los empleados.'
});
}
};