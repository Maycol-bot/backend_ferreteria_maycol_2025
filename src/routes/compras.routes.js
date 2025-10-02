import { Router } from 'express';
const routes = Router();
// Rutas

import { obtenerCompras, eliminarCompras} from '../controllers/compras.controller.js';
// Ruta para obtener todas las compras
routes.get('/compras', obtenerCompras);

export default routes;

// Ruta para obtener un compra por su ID
routes.get('/compras/:id_compra', obtenerCompras);

// Ruta para registrar una nueva compra
routes.post('/registrarcompra', obtenerCompras);

// Rutas para eliminar una compra por su id
routes.delete("/eliminarCompra/:id_compra", eliminarCompras);