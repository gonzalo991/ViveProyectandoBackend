// Importación de modulos
const Controller = require('../controller/noticias.controller');
const router = require('express').Router();
const { Authentication } = require('../middlewares/jwt.middleware');
const upload = require('../middlewares/multer.middleware');


// Declaración de rutas
router.get('/', Controller.getNoticias); // Ruta para obtener las noticias
router.get('/:id', Controller.getOneNew);
router.post('/agregar_noticia', Authentication, upload.single('image'), Controller.addNoticias); // Ruta para agregar nuevas noticias
router.put('/editar_noticia/:id', Authentication, Controller.editNoticia); // Ruta para editar noticias
router.delete('/borrar_noticia/:id', Authentication, Controller.deleteNoticia); // Ruta para borrar una noticia

module.exports = router;