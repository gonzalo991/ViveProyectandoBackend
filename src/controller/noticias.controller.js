const Controller = {} // Declaramos una lista de controladores
const Noticias = require('../models/noticias.model'); // Importamos el modelo de la base de datos

// Controlador para obtener las noticias de la base de datos
Controller.getNoticias = async (req, res) => {
    try {
        const noticias = await Noticias.find(); // Declaramos la variable donde obtendremos el listado de noticias
        res.status(200).json(noticias); // devolvemos el listado en formato json
    } catch (error) {
        // Manejo de errores
        console.error(error.message(`Ocurrió un error al cargar el listado de noticias: ${error}`));
    } finally {
        console.log("Se usó la función getNoticias");
    }
}

// Controlador para agregar una nueva noticia
Controller.addNoticias = async (req, res) => {
    // Manejo de errores
    try {
        // Obtenemos los datos del body
        const { titulo, subtitulo, reseña, texto, autor } = req.body;

        // guardamos los datos en un objeto Noticias
        const agregar_noticia = new Noticias({ titulo, subtitulo, reseña, texto, autor });

        // Enviamos y guardamos el objeto en la base de datos
        await agregar_noticia.save();

        // Devolvemos un estado 200 y un mensaje
        res.status(200).json("Noticia publicada");

    } catch (error) {
        // Enviamos el estado del error junto con un mensaje
        res.status(404).json(error.message(`Ocurrió un error al agregar la noticias: ${error}`));

    } finally {

        // Confirmamos que la función esta funcionando a pesar de los errores
        console.log("Se usó la función addNoticias");

    }
}

// Controlador para editar una noticia
Controller.editNoticia = async (req, res) => {
    try {
        // Recibimos los parametros del formulario
        const { titulo, subtitulo, reseña, texto, autor } = req.body;

        //Creamos una lista con los valores que recibimos del formulario
        const editar_noticia = { titulo, subtitulo, reseña, texto, autor };
        console.log(editar_noticia)
        //Realizamos la consulta a la base de datos enviando el id para poder modificar el documento
        await Noticias.findByIdAndUpdate(req.params.id, editar_noticia);

        res.status(200).json("Noticia actualizada"); // Devolvemos un estado de confirmación de la consulta


    } catch (error) {
        //Devuelvo el estado del error junto con el mensaje
        res.status(404).json(error.message(`Ocurrió un error al editar la noticias: ${error}`));

        // Imprimo el mensaje por consola
        console.error(error.message(`Ocurrió un error al editar la noticias: ${error}`));

    } finally {

        // Imprimo un mensaje por consola para confirmar que la función funciona correctamente
        console.log("Se utilizo la función editNoticia");

    }
}

//Función para borrar una noticia
Controller.deleteNoticia = async (req, res) => {
    try {
        await Noticias.findByIdAndDelete(req.params.id);
        res.status(200).json("Noticia borrada correctamente");

    } catch (error) {
        res.status(404).json(error.message(`Ocurrió un error al borrar la notica: ${error}`));
        console.error(`Ocurrió un error al borrar la notica: ${error}`);
    } finally {
        console.log("Se utilizó la función borrar noticia");
    }
}


module.exports = Controller;