const Controller = require('../controller/login.controller');
const router = require('express').Router();


router.post('/ingresar', Controller.userLogin);

module.exports = router;
