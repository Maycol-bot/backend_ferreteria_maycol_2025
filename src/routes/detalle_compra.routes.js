import { Router } from 'express';
const routes = Router();
// Rutas

import { obtenerDetalleCompras, eliminarDetalle_Compra} from '../controllers/detalle_compras.controller.js';
// Ruta para obtener todos los detalles de compras
routes.get('/detalle-compras', obtenerDetalleCompras);

export default routes;


// Ruta para obtener un detalle de compra por su ID
routes.get('/detalle-compra/:id_detalle', obtenerDetalleCompras);

// Ruta para registrar una nueva detalle de compra
routes.post('/registrar-detalle-compra', obtenerDetalleCompras);

// Rutas para eliminar un detalle de compra por su id
routes.delete("/eliminarDetalle_Compra/:id_detalle_compra", eliminarDetalle_Compra);