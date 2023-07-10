import React, { useEffect, useState } from 'react';
import Bio from '../fragments/Home/Bio';
import Slider from '../fragments/Home/Slider';
import Pagination from '../fragments/Blog/Pagination';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import swAlert from '@sweetalert/with-react';
import Card from '../fragments/Blog/Card';

const Home = () => {

    //Datos estáticos
    let id = 1;

    const text = [
        "Es un Comunicador Social comprometido con la Política y la Comunidad, nacido en La Carlota, Córdoba, es reconocido por su pasión, su militancia y su incansable búsqueda de la verdad las cuales han dejado una profunda huella en el ámbito periodístico.",
        "Como C.S  político, ha destacado por su dedicación incansable a la investigación y su búsqueda constante de la verdad. Su firme compromiso con la integridad comunicacional ha sido una constante a lo largo de su carrera, y es reconocido por su imparcialidad y por sus informes equilibrados y objetivos.",
        "Es importante destacar que Fonseca encuentra su inspiración en los valores del Partido Justicialista. Su dedicación a la política se basa en una fuerte creencia en la justicia social, la igualdad de oportunidades y la defensa de los derechos de los trabajadores. Estos valores fundamentales del justicialismo han guiado su carrera comunicacional y han sido la base de sus entrevistas, donde busca dar voz a aquellos que a menudo son marginados o desfavorecidos.",
        "Hoy en día, se destaca como Comunicador Social político, respetado y confiable. Su constante trabajo y su compromiso con los valores del Partido en el cuál se inspira han consolidado su reputación como un defensor apasionado de la comunidad y como un informador objetivo y riguroso."
    ]

    const title = 'Cristian Fonseca';

    const img = 'img/periodismoFonseca.jpeg';

    //Manejo de estado de las noticias
    const [noticias, setNoticias] = useState([]);
    const navigate = useNavigate();

    //Obtengo las noticias
    useEffect(() => {
        const endPoint = "/noticias";

        axios.get(endPoint).then(response => {
            const data = response.data;
            setNoticias(data);
        })
            .catch(err => { swAlert(<h4>Hubo un error en el servidor, vuelve más tarde.</h4>) });

    }, [navigate])

    //Datos de la páginación
    const noticiasPorPagina = 9;
    const totalDePaginas = Math.ceil(noticias.length / noticiasPorPagina);
    const [currentPage, setCurrentPage] = useState(1);
    // Calcula el índice inicial y final de las noticias a mostrar en la página actual
    const startIndex = (currentPage - 1) * noticiasPorPagina;
    const endIndex = startIndex + noticiasPorPagina - 1;

    const noticiasActuales = noticias.slice(startIndex, endIndex + 1);

    //Función para cambiar de página
    const handleGoToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Función para manejar el evento del botón "Anterior"
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Función para manejar el evento del botón "Siguiente"
    const handleNextPage = () => {
        if (currentPage < totalDePaginas) {
            setCurrentPage(currentPage + 1);
        }
    };


    return (
        <>

            <Slider />

            <section className='home_section'>

                <article className='home_articles'>
                    <div className='container'>
                        <div className='row'>
                            {
                                noticiasActuales.map((noticia) => {
                                    return (
                                        <Card noticias={noticia} key={noticia._id} />
                                    )
                                })
                            }
                        </div>
                    </div>

                    <Pagination totalDePaginas={totalDePaginas}
                        currentPage={currentPage} handleGoToPage={handleGoToPage}
                        handlePreviousPage={handlePreviousPage} handleNextPage={handleNextPage} />

                </article>

                <aside className='home_aside'>
                    <Bio id={id} img={img} title={title} text={text} />
                </aside>

            </section>
        </>
    )
}

export default Home;