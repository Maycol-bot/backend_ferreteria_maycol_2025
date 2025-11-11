// routes/venta.routes.js
import { Router } from 'express';
import { 
    obtenerVentas, 
    registrarVenta, 
    actualizarVenta, 
    eliminarVenta 
} from '../controllers/venta.controller.js';

const router = Router();

router.get('/ventas', obtenerVentas);
router.post('/registrarventa', registrarVenta);
router.put('/actualizarventa/:id_venta', actualizarVenta);     // ← PUT + /ventas (plural)
router.delete('/eliminarventa/:id_venta', eliminarVenta);    // ← mismo patrón

export default router;