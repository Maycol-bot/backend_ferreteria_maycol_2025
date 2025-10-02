import { Router } from 'express';
const routes = Router();
// Rutas

import { obtenerUsuarios, eliminarUsuario, registrarUsuario, actualizarUsuarios} from '../controllers/usuario.controller.js';
// Ruta para obtener todos los usuarios
routes.get('/usuarios', obtenerUsuarios);

export default routes;


// Ruta para obtener un cliente por su ID
routes.get('/usuario/:id_usuario', obtenerUsuarios);

// Ruta para registrar una nueva usuario
routes.post('/registrarusuario', registrarUsuario);

// Rutas para eliminar una compra por su id
routes.delete("/eliminarUsuario/:id_usuario", eliminarUsuario);

// ruta para actualizar un usuario
routes.put("/usuario/:id_usuario", actualizarUsuarios);