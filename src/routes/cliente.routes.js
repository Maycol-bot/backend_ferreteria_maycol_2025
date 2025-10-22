import { Router } from 'express';
import { obtenerClientes, eliminarCliente, registrarCliente, actualizarCliente} from '../controllers/clientes.controller.js';
const routes = Router();

// Ruta para obtener todos los clientes
routes.get('/clientes', obtenerClientes);

// Ruta para obtener un cliente por su ID
routes.get('/cliente/:id_cliente', obtenerClientes);

// Ruta para registrar una nueva cliente
routes.post('/registrarcliente', registrarCliente);

// Rutas para eliminar un cliente por su id
routes.delete("/eliminarCliente/:id_cliente", eliminarCliente);

// ruta para actualizar un cliente
routes.put("/cliente/:id_cliente", actualizarCliente);

export default routes;