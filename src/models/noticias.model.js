const mongo = require('mongoose');
const { Schema } = mongo;

const NoticiasSchema = new Schema({
    titulo: { type: String },
    subtitulo: { type: String },
    reseña: { type: String },
    texto: { type: String },
    autor: { type: String }
});

const Noticias = mongo.model('noticias', NoticiasSchema);

module.exports = Noticias;