const mongo = require('mongoose');
const { Schema } = mongo;

const NoticiasSchema = new Schema({
    titulo: { type: String },
    subtitulo: { type: String },
    texto: { type: String },
    image: { type: String, require: true },
    autor: { type: String }
},{
    timestamps: true
});

const Noticias = mongo.model('noticias', NoticiasSchema);

module.exports = Noticias;