import { Router } from 'express';
const routes = Router();
// Rutas

import { obtenerClientes, eliminarCliente, registrarCliente, actualizarCliente} from '../controllers/clientes.controller.js';
// Ruta para obtener todos los clientes
routes.get('/clientes', obtenerClientes);

export default routes;


// Ruta para obtener un cliente por su ID
routes.get('/cliente/:id_cliente', obtenerClientes);

// Ruta para registrar una nueva Categoría
routes.post('/registrarcliente', registrarCliente);

// Rutas para eliminar un cliente por su id
routes.delete("/eliminarCliente/:id_cliente", eliminarCliente);

// ruta para actualizar un cliente
routes.put("/cliente/:id_cliente", actualizarCliente);