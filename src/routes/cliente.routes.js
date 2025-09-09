import { Router } from 'express';
const routes = Router();
// Rutas

import { obtenerClientes } from '../controllers/clientes.controller.js';
// Ruta para obtener todos los clientes
routes.get('/clientes', obtenerClientes);

export default routes;


// Ruta para obtener un cliente por su ID
routes.get('/cliente/:id_cliente', obtenerClientes);