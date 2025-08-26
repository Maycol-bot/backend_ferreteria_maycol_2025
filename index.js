import app from "./app";
import {PORT} from './config.js';

app.listen(PORT);
console.log("servidor ejecutandose en el puerto", PORT);