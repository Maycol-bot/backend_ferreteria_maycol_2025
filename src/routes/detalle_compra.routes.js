import { Router } from 'express';
const routes = Router();
// Rutas

import { obtenerDetalleCompras } from '../controllers/detalle_compras.controller.js';
// Ruta para obtener todos los detalles de compras
routes.get('/detalle-compras', obtenerDetalleCompras);

export default routes;


// Ruta para obtener un detalle de compra por su ID
routes.get('/detalle-compra/:id_detalle', obtenerDetalleCompras);