import { Router } from 'express';
const routes = Router();
// Rutas

import { obtenerVentas } from '../controllers/venta.controller.js';
// Ruta para obtener todos los ventas
routes.get('/ventas', obtenerVentas);

export default routes;