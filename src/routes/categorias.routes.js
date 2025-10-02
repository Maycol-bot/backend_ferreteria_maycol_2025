
import { Router } from 'express';
const routes = Router();
// Rutas

import {obtenerCategorias, registrarCategoria, eliminarCategoria } from '../controllers/categorias.controller.js';
// Ruta para obtener todos los clientes
routes.get('/categorias', obtenerCategorias);

export default routes;

// Ruta para obtener un cliente por su ID
routes.get('/categoria/:id_categoria', obtenerCategorias);

routes.post('/categoria', obtenerCategorias);

// Ruta para registrar una nueva Categoría
routes.post('/registrarcategoria', registrarCategoria);

//ruta para eliminar una categoria
routes.delete("/categoria/:id_categoria", eliminarCategoria); 