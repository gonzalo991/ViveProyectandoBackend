import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ noticias }) => {

    const { autor, createdAt, image, subtitulo, texto, titulo, _id } = noticias;
    const fechaYhora = new Date(createdAt).toISOString().split('T');
    const fecha = fechaYhora[0];
    const hora = fechaYhora[1].substring(0, 8);

    return (
        <>
            <div className="col-md-4 card_container">
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src={`uploads/${image}`} alt="Placeholder" />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{titulo}</p>
                                <p className="subtitle is-6"><i>{subtitulo.substring(0, 100)}</i></p>
                            </div>
                        </div>

                        <div className="content">
                            <p>{`Fecha: ${hora} - ${fecha}`}</p>
                            <h6>{`Autor: ${autor}`}</h6>
                        </div>

                        <Link className='btn btn-primary d-flex justify-content-center' to={`/detalle?id_noticia=${_id}`}>Ver Noticia</Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card
