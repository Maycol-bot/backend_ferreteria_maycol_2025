
import { Router } from 'express';
const routes = Router();
// Rutas

import { obtenerCategorias } from '../controllers/categorias.controller.js';
// Ruta para obtener todos los clientes
routes.get('/categorias', obtenerCategorias);

export default routes;

// Ruta para obtener un cliente por su ID
routes.get('/categoria/:id_categoria', obtenerCategorias);

routes.post('/categoria', obtenerCategorias);