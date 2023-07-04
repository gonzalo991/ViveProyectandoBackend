const Controller = {} // Declaramos una lista de controladores
const Noticias = require(); // Importamos el modelo de la base de datos

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
        // Manejo de errores
        console.error(error.message(`Ocurrió un error al cargar la noticia: ${error}`))
    } finally {
        console.log("Se usó la función addNoticias");
    }
}


module.exports = Controller;