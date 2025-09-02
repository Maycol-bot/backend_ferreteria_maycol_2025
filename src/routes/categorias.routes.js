import { Router } from 'express';
const routes = Routes();
// Rutas
export default routes;


import { obtenerCategorias } from '../controllers/categorias.controller.js';
// Ruta para obtener todos los clientes
routes.get('/categorias', obtenerCategorias);