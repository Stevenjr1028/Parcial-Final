const express = require('express');
const { listarMensaje, crearMensaje } = require('../controllers/mensaje');
const router = express.Router();

// CRUD de listas
router.get('/:', listarMensaje);
router.post('/:', crearMensaje);

// Exportar Rutas
module.exports = router;