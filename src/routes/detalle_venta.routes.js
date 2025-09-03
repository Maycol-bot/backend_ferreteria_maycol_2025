import { Router } from 'express';
const routes = Router();
// Rutas

import { obtenerDetalleVentas } from '../controllers/detalle_venta.controller.js';
// Ruta para obtener todos los detalles de ventas
routes.get('/detalle-ventas', obtenerDetalleVentas);

export default routes;