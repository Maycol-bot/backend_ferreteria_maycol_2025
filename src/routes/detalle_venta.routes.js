import { Router } from 'express';
const routes = Router();
// Rutas

import { obtenerDetalleVentas, eliminarDetalle_Venta, registrarDetalle_Venta, actualizarDetalle_Venta} from '../controllers/detalle_venta.controller.js';
// Ruta para obtener todos los detalles de ventas
routes.get('/detalle-ventas', obtenerDetalleVentas);

export default routes;


// Ruta para obtener un detalle de venta por su ID
routes.get('/detalle-venta/:id_detalle', obtenerDetalleVentas);

// Ruta para registrar una nueva detalle de venta
routes.post('/registrar-detalle-venta', registrarDetalle_Venta);

// Rutas para eliminar un detalle de venta por su id
routes.delete("/eliminarDetalle_Venta/:id_detalle_venta", eliminarDetalle_Venta);

// ruta para actualizar un detalle de venta
routes.put("/detalle-venta/:id_detalle_venta", actualizarDetalle_Venta);