// controllers/empleado.controller.js
import { pool } from '../../db_connection.js';

// GET todos
export const obtenerEmpleados = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Empleados ORDER BY id_empleado DESC');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al obtener empleados', error: error.message });
    }
};

// GET uno
export const obtenerEmpleado = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await pool.query('SELECT * FROM Empleados WHERE id_empleado = ?', [id]);
        if (rows.length === 0) return res.status(404).json({ mensaje: 'Empleado no encontrado' });
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error' });
    }
};

// POST crear
export const registrarEmpleado = async (req, res) => {
    try {
        const {
            primer_nombre,
            segundo_nombre = null,
            primer_apellido,
            segundo_apellido = null,
            celular,
            cargo,
            fecha_contratacion
        } = req.body;

        const [result] = await pool.query(
            `INSERT INTO Empleados 
            (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, celular, cargo, fecha_contratacion)
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, celular, cargo, fecha_contratacion]
        );

        res.status(201).json({ 
            id_empleado: result.insertId,
            mensaje: 'Empleado creado correctamente'
        });
    } catch (error) {
        console.error('ERROR REGISTRO:', error);
        res.status(500).json({ 
            mensaje: 'Error al crear empleado', 
            error: error.message,
            codigo: error.code 
        });
    }
};

// DELETE
export const eliminarEmpleado = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await pool.query('DELETE FROM Empleados WHERE id_empleado = ?', [id]);
        if (result.affectedRows === 0) return res.status(404).json({ mensaje: 'No encontrado' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar' });
    }
};

// PUT actualizar
export const actualizarEmpleado = async (req, res) => {
    try {
        const { id } = req.params;
        const campos = [];
        const valores = [];

        const camposPermitidos = {
            primer_nombre: req.body.primer_nombre,
            segundo_nombre: req.body.segundo_nombre,
            primer_apellido: req.body.primer_apellido,
            segundo_apellido: req.body.segundo_apellido,
            celular: req.body.celular,
            cargo: req.body.cargo,
            fecha_contratacion: req.body.fecha_contratacion
        };

        Object.keys(camposPermitidos).forEach(key => {
            if (camposPermitidos[key] !== undefined) {
                campos.push(`${key} = ?`);
                valores.push(camposPermitidos[key]);
            }
        });

        if (campos.length === 0) {
            return res.status(400).json({ mensaje: 'No se enviaron datos para actualizar' });
        }

        valores.push(id);
        const sql = `UPDATE Empleados SET ${campos.join(', ')} WHERE id_empleado = ?`;

        const [result] = await pool.query(sql, valores);

        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: 'Empleado no encontrado' });
        }

        const [empleado] = await pool.query('SELECT * FROM Empleados WHERE id_empleado = ?', [id]);
        res.json(empleado[0]);

    } catch (error) {
        console.error('ERROR ACTUALIZAR EMPLEADO:', error);
        res.status(500).json({ 
            mensaje: 'Error al actualizar empleado',
            error: error.message,
            sqlError: error.sqlMessage || error.message
        });
    }
};