const {
    Schema,
    model
} = require('mongoose');

const MensajeScheme = Schema({

    id: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
});

module.exports = model('Mensaje', MensajeScheme);