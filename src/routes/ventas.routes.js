import { Router } from 'express';
import { obtenerVentas, obtenerVenta, registrarVenta, eliminarVenta,actualizarVenta} from '../controllers/ventas.controllers.js';

const router = Router();

// Ruta para obtener todas los detalles_ventas
router.get('/ventas', obtenerVentas);

// ruta para obtener una detalles_ventas por su ID
router.get('/venta/:id', obtenerVenta);

// Ruta para registrar una nueva detalle_ventas
router.post('/venta', registrarVenta);

// ruta para eliminar una detalles_ventas por ID
router.delete('/venta/:id_venta', eliminarVenta);

// Ruta para actualizar una detalles_ventas por su ID
router.patch('/venta/:id_venta', actualizarVenta);

export default router;