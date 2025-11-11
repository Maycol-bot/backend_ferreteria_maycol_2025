// src/controllers/producto.controller.js
import { pool } from '../../db_connection.js';

// === OBTENER TODOS ===
export const obtenerProductos = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM Productos');
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Error al obtener productos.',
      error: error.message
    });
  }
};

// === OBTENER UNO ===
export const obtenerProducto = async (req, res) => {
  try {
    const { id_producto } = req.params;
    const [result] = await pool.query('SELECT * FROM Productos WHERE id_producto = ?', [id_producto]);
    if (result.length === 0) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// === REGISTRAR ===
export const registrarProducto = async (req, res) => {
  try {
    const {
      nombre_producto,
      descripcion_producto,
      id_categoria,
      precio_unitario,
      stock,
      imagen
    } = req.body;

    // Validar campos obligatorios
    if (!nombre_producto || !id_categoria || !precio_unitario || !stock) {
      return res.status(400).json({
        mensaje: 'Faltan campos obligatorios: nombre_producto, id_categoria, precio_unitario, stock'
      });
    }

    const [result] = await pool.query(
      `INSERT INTO Productos 
       (nombre_producto, descripcion_producto, id_categoria, precio_unitario, stock, imagen)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [
        nombre_producto,
        descripcion_producto || null,
        id_categoria,
        precio_unitario,
        stock,
        imagen || null
      ]
    );

    res.status(201).json({ id_producto: result.insertId });
  } catch (error) {
    console.error("Error en registrarProducto:", error);
    return res.status(500).json({
      mensaje: 'Error al registrar producto.',
      error: error.message
    });
  }
};

// === ELIMINAR ===
export const eliminarProducto = async (req, res) => {
  try {
    const { id_producto } = req.params;
    const [result] = await pool.query('DELETE FROM Productos WHERE id_producto = ?', [id_producto]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// === ACTUALIZAR ===
export const actualizarProducto = async (req, res) => {
  try {
    const { id_producto } = req.params;
    const campos = req.body;

    const camposPermitidos = [
      'nombre_producto',
      'descripcion_producto',
      'id_categoria',
      'precio_unitario',
      'stock',
      'imagen'
    ];

    const updates = [];
    const valores = [];

    for (const campo of camposPermitidos) {
      if (campos[campo] !== undefined) {
        updates.push(`${campo} = ?`);
        valores.push(campos[campo]);
      }
    }

    if (updates.length === 0) {
      return res.status(400).json({ mensaje: 'No hay campos para actualizar' });
    }

    valores.push(id_producto);
    const query = `UPDATE Productos SET ${updates.join(', ')} WHERE id_producto = ?`;

    const [result] = await pool.query(query, valores);

    if (result.affectedRows === 0) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }

    res.json({ mensaje: 'Producto actualizado correctamente' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};