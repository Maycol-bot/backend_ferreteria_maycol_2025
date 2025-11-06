import { Router } from 'express';
import { 
  obtenerCompras, 
  obtenerCompraPorId,      // ESTE es el que sí existe en tu controlador
  registrarCompra, 
  actualizarCompra, 
  eliminarCompra 
} from '../controllers/compras.controller.js';

const router = Router();

// Obtener TODAS las compras
router.get('/compras', obtenerCompras);

// Obtener UNA compra por ID
router.get('/compras/:id_compra', obtenerCompraPorId);

// Crear nueva compra
router.post('/compras', registrarCompra);

// Actualizar compra
router.put('/compras/:id_compra', actualizarCompra);

// Eliminar compra
router.delete('/compras/:id_compra', eliminarCompra);

export default router;
