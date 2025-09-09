import { Router } from 'express';
const routes = Router();
// Rutas

import { obtenerDetalleVentas } from '../controllers/detalle_venta.controller.js';
// Ruta para obtener todos los detalles de ventas
routes.get('/detalle-ventas', obtenerDetalleVentas);

export default routes;


// Ruta para obtener un detalle de venta por su ID
routes.get('/detalle-venta/:id_detalle', obtenerDetalleVentas);

// Ruta para registrar una nueva detalle de venta
routes.post('/registrar-detalle-venta', obtenerDetalleVentas);