
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

// Registrar una nueva detalle empleado
export const registrarEmpleado = async (req, res) => {
    try {
        const { nombre_empleado, apellido_empleado, direccion_empleado, telefono_empleado, email_empleado, puesto_empleado, salario_empleado } = req.body;
        const [result] = await pool.query(
            'INSERT INTO empleados (nombre_empleado, apellido_empleado, direccion_empleado, telefono_empleado, email_empleado, puesto_empleado, salario_empleado) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [nombre_empleado, apellido_empleado, direccion_empleado, telefono_empleado, email_empleado, puesto_empleado, salario_empleado]
        );
        res.status(201).json({ id_empleado: result.insertId });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al registrar el empleado.',
            error: error
        });
    }};