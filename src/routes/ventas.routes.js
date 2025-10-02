import { Router } from 'express';
const routes = Router();
// Rutas

import { obtenerVentas, eliminarVenta} from '../controllers/venta.controller.js';
// Ruta para obtener todos los ventas
routes.get('/ventas', obtenerVentas);

export default routes;


// Ruta para obtener un venta por su ID
routes.get('/venta/:id_venta', obtenerVentas);

// Ruta para registrar una nueva venta 
routes.post('/registrarventa', obtenerVentas);

// Rutas para eliminar una venta por su id
routes.delete("/eliminarEliminar/:id_venta", eliminarVenta);