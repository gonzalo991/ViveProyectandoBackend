// variables de entorno
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const port = process.env.PORT || 3000;
const path = require('path');
const morgan = require('morgan');
const database = require('./database/db.database');
//const cors = require('cors');


//logs
app.use(morgan('dev'));

//Configuraciones
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cors);
app.use(express.static(path.join(__dirname, '../public/')));
//Rutas
app.use('/admin', require('./routes/admin.routes'));
app.use('/noticias', require('./routes/noticias.routes'));
app.use('/login', require('./routes/user.routes'));

app.listen(port, (error) => {
    if (error) {
        console.error(error.message);
    } else {
        console.log(`Server running on port : ${port}`);
    }
});

