// src/routes/producto.routes.js
import { Router } from 'express';
import {
  obtenerProductos,
  obtenerProducto,
  registrarProducto,
  eliminarProducto,
  actualizarProducto
} from '../controllers/producto.controller.js';

const router = Router();

router.get('/productos', obtenerProductos);
router.get('/producto/:id_producto', obtenerProducto);
router.post('/producto', registrarProducto);
router.put('/producto/:id_producto', actualizarProducto);
router.patch('/producto/:id_producto', actualizarProducto); // opcional, pero funciona igual
router.delete('/producto/:id_producto', eliminarProducto);

export default router;