import { Router } from 'express';
const routes = Router();
// Rutas

import { obtenerEmpleados, eliminarEmpleado, registrarEmpleado, actualizarEmpleado} from '../controllers/empleado.controller.js';
// Ruta para obtener todos los empleados
routes.get('/empleados', obtenerEmpleados);

export default routes;


// Ruta para obtener un empleado por su ID
routes.get('/empleado/:id_empleado', obtenerEmpleados);

// Ruta para registrar una nueva empleado
routes.post('/registrarempleado', registrarEmpleado);

// Rutas para eliminar un empleado por su id
routes.delete("/eliminarEmpleado/:id_empleado", eliminarEmpleado);

// ruta para actualizar un empleado
routes.put("/empleado/:id_empleado", actualizarEmpleado);