import { Router } from 'express';
import { obtenerClientes, obtenerClientePorId, eliminarCliente,
     registrarCliente, actualizarCliente} from '../controllers/clientes.controller.js';
const routes = Router();

// Ruta para obtener todos los clientes
routes.get('/clientes', obtenerClientes);

// Ruta para obtener un cliente por su ID
routes.get('/clientes/:id_cliente', obtenerClientePorId);

// Ruta para registrar una nueva cliente
routes.post('/registrarcliente', registrarCliente);

// Rutas para eliminar un cliente por su id
routes.delete('/clientes/:id_cliente', eliminarCliente);

// ruta para actualizar un cliente
routes.put('/clientes/:id_cliente', actualizarCliente);

export default routes;