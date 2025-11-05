import express from 'express';
import cors from 'cors';

import rutasCategorias from './src/routes/categorias.routes.js';
import rutasClientes  from './src/routes/cliente.routes.js';
import rutasCompras from './src/routes/compras.routes.js';
import rutasDetalleCompras from './src/routes/detalle_compras.routes.js';
import rutasDetalleVenta from './src/routes/detalle_venta.routes.js';
import rutasEmpleado from './src/routes/empleado.routes.js';
import rutasProductos from './src/routes/producto.routes.js';
import rutasUsuarios from './src/routes/usuario.routes.js';
import rutasVentas from './src/routes/ventas.routes.js';


const app = express();

app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedheaders: ['Content-Type'],
}));

app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({limit: '10mb', extended: true}));

app.use('/api', rutasCategorias);
app.use('/api', rutasClientes);
app.use('/api', rutasCompras);
app.use('/api', rutasDetalleCompras);
app.use('/api', rutasDetalleVenta);
app.use('/api', rutasEmpleado);
app.use('/api', rutasProductos);
app.use('/api', rutasUsuarios);
app.use('/api', rutasVentas);

app.use((req, res, next) => {
    res.status(404).json({
        menssage: 'la ruta que ha especificadono se encuentra registrada.'
    });
});

export default app;