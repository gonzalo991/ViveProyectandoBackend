const adminController = require('../controller/admin.controller');
const router = require('express').Router();
const {Authentication} = require('../middlewares/jwt.middleware');

// Declaración de rutas para obtener los datos del admin
router.get('/datos', Authentication, adminController.adminPanel);


module.exports = router;