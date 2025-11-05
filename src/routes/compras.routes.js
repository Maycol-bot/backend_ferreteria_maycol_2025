import { Router } from 'express';
import { 
  obtenerCompras, 
  obtenerCompra, 
  registrarCompra, 
  actualizarCompra, 
  eliminarCompra 
} from '../controllers/compras.controller.js';

const router = Router();

// Obtener todas las compras
router.get('/compras', obtenerCompras);

// Obtener una compra por su ID
router.get('/compra/:id_compra', obtenerCompra);

// Registrar una nueva compra
router.post('/compra', registrarCompra);

// Actualizar una compra existente
router.put('/compra/:id_compra', actualizarCompra);

// Eliminar una compra por su ID
router.delete('/compra/:id_compra', eliminarCompra);

export default router;
