import { Router } from 'express';
import { obtenerCompras, obtenerCompra, registrarCompra,actualizarCompra, eliminarCompra, } from '../controllers/compras.controllers.js';

const router = Router();

// Ruta para obtener todas las  compras
router.get('/ compras', obtenerCompras);

// ruta para obtener una compras por su ID
router.get('/compra/:id', obtenerCompra);

router.get('/compra', registrarCompra);

// Ruta para registrar una nueva compras
router.post('/compra', actualizarCompra);

// ruta para eliminar una compras por ID
router.delete('/compra/:id_compra', eliminarCompra);

export default router;