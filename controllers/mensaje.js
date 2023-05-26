const express = require('express');
const Task = require('../models/mensaje');

async function crearMensaje (req, res = express.request) {
    const mensaje = new Mensaje(req.body);

    try {
        task.mensaje = req.uid;
        const saved = await mensaje.save();

        // Retorna el Task Creado
        res.json({
            ok: true,
            mensaje: saved
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            mensaje: 'Internal Error'
        });
    }
}

async function listarMensaje (req, res = express.request) {
    const tasks = await Task.find()

    try {
        res.status(200).json({
            ok: true,
            tasks
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Internal Error'
        });
    }
}

module.exports = {crearMensaje, listarMensaje};