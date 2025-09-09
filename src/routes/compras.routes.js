import { Router } from 'express';
const routes = Router();
// Rutas

import { obtenerCompras } from '../controllers/compras.controller.js';
// Ruta para obtener todas las compras
routes.get('/compras', obtenerCompras);

export default routes;

// Ruta para obtener un compra por su ID
routes.get('/compras/:id_compra', obtenerCompras);