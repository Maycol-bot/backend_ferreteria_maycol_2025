import { Router } from 'express';
const routes = Router();
// Rutas

import { obtenerUsuarios} from '../controllers/usuario.controller.js';
// Ruta para obtener todos los usuarios
routes.get('/usuarios', obtenerUsuarios);

export default routes;