import { Router } from 'express';
const routes = Router();
// Rutas

import { obtenerProductos} from '../controllers/producto.controller.js';
// Ruta para obtener todos las compras
routes.get('/productos', obtenerProductos);

export default routes;


// Ruta para obtener un producto por su ID
routes.get('/producto/:id_producto', obtenerProductos);