const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*", // ⚠️ En producción, pon la IP exacta o dominio
        methods: ["GET", "POST"]
    }
});

// Conexión PostgreSQL [CAMBIAR CON TUS DATOS DE CONEXION]
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'db_market',
    password: 'rampage',
    port: 5432,
});

// Cada 5 segundos, obtiene los últimos mensajes y los emite
setInterval(async () => {
    // Categorías
    const categorias = await pool.query(
        'SELECT * FROM tbl_categorias  WHERE estado = TRUE'
    );
    io.emit('categorias_actualizadas', categorias.rows);
    
    // Clientes
    const clientes = await pool.query(
        'SELECT * FROM tbl_clientes'
    );
    io.emit('clientes_actualizados', clientes.rows);

    // Productos
    const productos = await pool.query(
        'SELECT * FROM tbl_productos WHERE estado = TRUE'
    );
    io.emit('productos_actualizados', productos.rows);

    // Compras
    const compras = await pool.query(
        'SELECT * FROM tbl_compras'
    );
    io.emit('compras_actualizadas', compras.rows);

}, 5000); // cada 5 segundos

io.on('connection', (socket) => {
    console.log('Cliente conectado');
});

server.listen(3001, () => {
    console.log('Socket.IO corriendo en http://localhost:3001');
});