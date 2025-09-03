
import { Router } from 'express';
const routes = Router();
// Rutas

import { obtenerCategorias } from '../controllers/categorias.controller.js';
// Ruta para obtener todos los clientes
routes.get('/categorias', obtenerCategorias);

export default routes;