import { Router } from 'express';
import {
    obtenerDetalle_compras,
    obtenerDetalle_compra,
    registrarDetalle_compra,
    eliminarDetalle_compra,
    actualizarDetalle_compra
} from '../controllers/detalle_compras.controller.js';

const router = Router();

// Obtener todos los detalles de compras
router.get('/detalle_compras', obtenerDetalles_compras);

// Obtener un detalle por su ID
router.get('/detalle_compra/:id_detalle_compra', obtenerDetalle_compra);

// Registrar un nuevo detalle
router.post('/detalle_compra', registrarDetalle_compra);

// Actualizar un detalle existente
router.patch('/detalle_compra/:id_detalle_compra', actualizarDetalle_compra);

// Eliminar un detalle por ID
router.delete('/detalle_compra/:id_detalle_compra', eliminarDetalle_compra);

export default router;
