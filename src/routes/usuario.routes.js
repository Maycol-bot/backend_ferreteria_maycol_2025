import { Router } from 'express';
import { obtenerUsuarios,
     obtenerUsuario, 
     registrarUsuario, 
     eliminarUsuario,
     actualizarUsuario} 
     from '../controllers/usuario.controller.js';

const router = Router();

// Ruta para obtener todas los usuarios
router.get('/usuarios', obtenerUsuarios);

// ruta para obtener un usuario por su ID
router.get('/usuario/:id', obtenerUsuario);

// Ruta para registrar un nuevo usuario
router.post('/usuario', registrarUsuario);

// ruta para eliminar un usuario por ID
router.delete('/usuario/:id_usuario', eliminarUsuario);

// Ruta para actualizar un usuario por su ID
router.put('/usuario/:id_usuario', actualizarUsuario);

export default router;