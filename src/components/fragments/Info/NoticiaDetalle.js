import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SwAlert from '@sweetalert/with-react';
import Slider from '../Home/Slider';
import { Link, useLocation } from 'react-router-dom';
import Form from '../Blog/Form';
import Comments from '../Blog/Comments';

const NoticiaDetalle = () => {

    let location = useLocation();
    let query = new URLSearchParams(location.search);
    let id_noticia = query.get('id_noticia');

    const navigate = useNavigate();
    const [noticia, setNoticia] = useState(null);


    useEffect(() => {
        const endpoint = `/noticias/${id_noticia}`;

        axios.get(endpoint).then((response) => {
            const data = response.data;
            setNoticia(data);
        }).catch((error) => {
            SwAlert(<h4>No se pudo cargar la noticia debido a un error con el servidor. Por favor vuelve más tarde.</h4>)
        });

    }, [navigate, id_noticia])

    return (
        <>
            <Slider />
            {
                noticia ?
                    <section className='noticia_section text-center mt-6'>

                        <article className='noticia_article mt-5'>
                            <h1 className='noticia_title'>{noticia.titulo}</h1>
                            <p className='noticia_description container text-center mt-2 mb-3'>{noticia.subtitulo}</p>
                            <img className='noticia_img mt-3 mb-3' src={`uploads/${noticia.image}`} alt={`imagen de la noticia`} />
                        </article>

                        <article className='container text-center'>
                            <p className='noticia_texto'>{noticia.texto}</p>
                        </article>
                        {/*
                        <div className='mt-5'>
                            <Comments />
                        </div>
        */
                        }

                        <div className='formulario mt-5'>
                            {/*<Form />*/}
                            <Link to='/' className='btn btn-primary mt-5'>Volver</Link>
                        </div>

                    </section> :
                    <div className='container text-center'>
                        <h2 className='mt-5'>Cargando...</h2>
                        <Link to='/' className='btn btn-secondary mt-5'>Volver</Link>
                    </div>
            }
        </>
    )
}

export default NoticiaDetalle;