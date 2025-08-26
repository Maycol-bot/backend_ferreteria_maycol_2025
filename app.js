import express from 'express';
import cors from 'cors';

import rutasCategorias from '.routes/Categorias.routes.js';
import { Types } from 'mysql2';

const app = express();

app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedheaders: ['Content-Type'],
}));

app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({limit: '10mb', extended: true}));

app.use('/api', rutasCategorias);

app.use((req. res. next) => {
    res.status(404).json({
        menssage:'la ruta que ha especificadono se encuentra registrada.'
    });
});

export default app;