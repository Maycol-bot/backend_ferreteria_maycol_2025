import { Router } from 'express';
const routes = Router();
// Rutas

import { obtenerUsuarios} from '../controllers/usuario.controller.js';
// Ruta para obtener todos los usuarios
routes.get('/usuarios', obtenerUsuarios);

export default routes;


// Ruta para obtener un cliente por su ID
routes.get('/usuario/:id_usuario', obtenerUsuarios);

// Ruta para registrar una nueva usuario
routes.post('/registrarusuario', obtenerUsuarios);