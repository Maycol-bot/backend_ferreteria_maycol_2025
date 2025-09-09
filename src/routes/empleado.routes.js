import { Router } from 'express';
const routes = Router();
// Rutas

import { obtenerEmpleados} from '../controllers/empleado.controller.js';
// Ruta para obtener todos los empleados
routes.get('/empleados', obtenerEmpleados);

export default routes;


// Ruta para obtener un empleado por su ID
routes.get('/empleado/:id_empleado', obtenerEmpleados);