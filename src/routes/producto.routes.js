import { Router } from 'express';
const routes = Router();
// Rutas

import { obtenerProductos, eliminarProducto} from '../controllers/producto.controller.js';
import { eliminarEmpleado } from '../controllers/empleado.controller.js';
// Ruta para obtener todos las compras
routes.get('/productos', obtenerProductos);

export default routes;


// Ruta para obtener un producto por su ID
routes.get('/producto/:id_producto', obtenerProductos);

// Ruta para registrar una nueva producto
routes.post('/registrarproducto', obtenerProductos);

// Rutas para eliminar un empleado por su id
routes.delete("/eliminarEmpleado/:id_producto", eliminarEmpleado);