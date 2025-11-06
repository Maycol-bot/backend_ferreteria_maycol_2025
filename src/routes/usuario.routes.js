// routes/usuario.routes.js
import { Router } from 'express';
import { obtenerUsuarios, registrarUsuario, actualizarUsuario, eliminarUsuario } from '../controllers/usuario.controller.js';

const router = Router();

router.get('/usuarios', obtenerUsuarios);
router.post('/usuarios', registrarUsuario);
router.put('/usuarios/:id_usuario', actualizarUsuario);
router.delete('/usuarios/:id_usuario', eliminarUsuario);

export default router;