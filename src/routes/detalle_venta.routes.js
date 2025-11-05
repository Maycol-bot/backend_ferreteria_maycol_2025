import { Router } from 'express';
import { obtenerDetalles_compras, obtenerDetalle_compra, registrarDetalle_compra, eliminarDetalle_compra,actualizarDetalle_compra} from '../controllers/detalles_compras.controllers.js';

const router = Router();

// Ruta para obtener todas los detalles_ventas
router.get('/detalles_compras', obtenerDetalles_compras);

// ruta para obtener una detalles_ventas por su ID
router.get('/detalle_compra/:id', obtenerDetalle_compra);

// Ruta para registrar una nueva detalle_ventas
router.post('/detalle_compra', registrarDetalle_compra);

// ruta para eliminar una detalles_ventas por ID
router.delete('/detalle_compra/:id_detalle_compra', eliminarDetalle_compra);

// Ruta para actualizar una detalles_ventas por su ID
router.patch('/detalle_compra/:id_detalle_compra', actualizarDetalle_compra);
export default router;