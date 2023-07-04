// variables de entorno
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const port = process.env.PORT || 3000;
const morgan = require('morgan');

//logs
app.use(morgan('dev'));

//Configuraciones
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Rutas
app.get((req, res) => {
    res.send('Página del servidor por default');
})

app.listen(port, (error) => {
    if (error) {
        console.error(error.message);
    } else {
        console.log(`Server running on port : ${port}`);
    }
});

