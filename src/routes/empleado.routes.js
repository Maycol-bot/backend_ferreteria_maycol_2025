import { Router } from 'express';
import {
    obtenerEmpleados,
    obtenerEmpleado,
    registrarEmpleado,
    eliminarEmpleado,
    actualizarEmpleado
} from '../controllers/empleado.controller.js';

const router = Router();

router.get('/empleados', obtenerEmpleados);
router.get('/empleado/:id', obtenerEmpleado);
router.post('/registrarempleado', registrarEmpleado);
router.delete('/eliminarempleado/:id', eliminarEmpleado);
router.put('/actualizarempleado/:id', actualizarEmpleado); // Única ruta

export default router;