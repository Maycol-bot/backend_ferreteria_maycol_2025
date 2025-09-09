import { Router } from 'express';
const routes = Router();
// Rutas

import { obtenerVentas } from '../controllers/venta.controller.js';
// Ruta para obtener todos los ventas
routes.get('/ventas', obtenerVentas);

export default routes;


// Ruta para obtener un venta por su ID
routes.get('/venta/:id_venta', obtenerVentas);

// Ruta para registrar una nueva venta 
routes.post('/registrarventa', obtenerVentas);