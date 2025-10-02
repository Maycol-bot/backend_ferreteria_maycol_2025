import { Router } from 'express';
const routes = Router();
// Rutas

import { obtenerCompras, eliminarCompras, registrarCompra, actualizarCompra} from '../controllers/compras.controller.js';
// Ruta para obtener todas las compras
routes.get('/compras', obtenerCompras);

export default routes;

// Ruta para obtener un compra por su ID
routes.get('/compras/:id_compra', obtenerCompras);

// Ruta para registrar una nueva compra
routes.post('/registrarcompra', registrarCompra);

// Rutas para eliminar una compra por su id
routes.delete("/eliminarCompra/:id_compra", eliminarCompras);

// ruta para actualizar una compra
routes.put("/compra/:id_compra", actualizarCompra);