// Importación de modulos
const Controller = require('../controller/noticias.controller');
const router = require('express').Router();
const { Authentication } = require('../middlewares/jwt.middleware');
const multer = require('multer'); // Importamos Multer, un middleware para manejar archivos en multipart/form-data
const upload = multer({ dest: 'uploads/' }); // Configuramos Multer para guardar los archivos en la carpeta 'uploads'


// Declaración de rutas
router.get('/', Controller.getNoticias); // Ruta para obtener las noticias
router.post('/agregar_noticia', Authentication, upload.single('image'), Controller.addNoticias); // Ruta para agregar nuevas noticias
router.post('/editar_noticia/:id', Authentication, Controller.editNoticia); // Ruta para editar noticias
router.delete('/borrar_noticia/:id', Authentication, Controller.deleteNoticia); // Ruta para borrar una noticia

module.exports = router;