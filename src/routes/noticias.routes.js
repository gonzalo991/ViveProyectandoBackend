// Importación de modulos
const Controller = require('../controller/noticias.controller');
const router = require('express').Router();

// Declaración de rutas
router.get('/', Controller.getNoticias); // Ruta para obtener las noticias
router.post('/agregar_noticia', Controller.addNoticias); // Ruta para agregar nuevas noticias


module.exports = router;