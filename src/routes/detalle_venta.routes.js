import { Router } from 'express';
import { obtenerDetalles_ventas,
    obtenerDetalle_venta,
     registrarDetalle_venta,
      eliminarDetalle_venta,
      actualizarDetalle_venta
} from '../controllers/detalle_venta.controller.js';

const router = Router();

// Ruta para obtener todas los detalles_ventas
router.get('/detallesventas', obtenerDetalles_ventas);

// ruta para obtener una detalles_ventas por su ID
router.get('/detalle_venta/:id', obtenerDetalle_venta);

// Ruta para registrar una nueva detalle_ventas
router.post('/registrardetalleventa', registrarDetalle_venta);

// ruta para eliminar una detalles_ventas por ID
router.delete('/eliminardetalleventa/:id_detalle_venta', eliminarDetalle_venta);

// Ruta para actualizar una detalles_ventas por su ID
router.patch('/actualizardetalleventa/:id_detalle_venta', actualizarDetalle_venta);
export default router;