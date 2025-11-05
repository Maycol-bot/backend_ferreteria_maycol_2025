import { Router } from 'express';
import { obtenerEmpleados, obtenerEmpleado, registrarEmpleado, eliminarEmpleado,actualizarEmpleado} from '../controllers/empleados.controllers.js';

const router = Router();

// Ruta para obtener todas los empleados
router.get('/empleados', obtenerEmpleados);

// ruta para obtener una empleados por su ID
router.get('/empleado/:id', obtenerEmpleado);

// Ruta para registrar una nueva detalle_ventas
router.post('/empleado', registrarEmpleado);

// ruta para eliminar una detalles_ventas por ID
router.delete('/empleado/:id_empleado', eliminarEmpleado);

export default router;

// Ruta para actualizar una detalles_ventas por su ID
router.put('/empleado/:id_empleado', actualizarEmpleado);

// Ruta para actualizar una empleado por su ID
router.patch('/empleado/:id_empleado', actualizarEmpleado);
