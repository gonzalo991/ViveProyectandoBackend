import React, { useState } from 'react';
import SwAlert from '@sweetalert/with-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AiFillEdit } from 'react-icons/ai';

const EditForm = ({ noticia, token }) => {

    const id_noticia = noticia._id;
    const { titulo, subtitulo, autor, texto } = noticia;

    const navigate = useNavigate();

    const [nuevaNoticia, setNuevaNoticia] = useState({
        titulo: titulo,
        subtitulo: subtitulo,
        autor: autor,
        texto: texto
    });

    const [isOpen, setIsOpen] = useState(false);

    const openModal = (ev) => {
        setIsOpen(true);
    };

    const closeModal = (ev) => {
        setIsOpen(false);
    };

    const handleChange = (ev) => {

        const { name, value } = ev.target;

        setNuevaNoticia({
            ...nuevaNoticia,
            [name]: value
        });

    }

    const handleSubmit = (ev) => {

        axios.put(`/noticias/editar_noticia/${id_noticia}`, nuevaNoticia, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(response => {
                SwAlert(<h4>Noticia publicada exitosamente</h4>)
            }).catch(error => {
                console.error(`Ocurrió un error: ${error}`);
            })
    }

    return (
        <>
            <button onClick={openModal} className='btn btn-warning'><AiFillEdit className='mb-1' /></button>

            <div className={`modal  ${isOpen ? 'is-active' : ''}`}>
                <div className='modal-content'>
                    <div className='container'>
                        <form className='mt-5' onSubmit={handleSubmit}>
                            <div className='row'>
                                <div className='col-6 mt-3'>
                                    <label className='form-label' htmlFor='titulo' style={{ color: "red", textDecoration: "underline" }}>Titulo</label>
                                    <input type='text' className='form-control' value={nuevaNoticia.titulo}
                                        onChange={handleChange} name='titulo' />
                                </div>

                                <div className='col-6 mt-3'>
                                    <label className='form-label' htmlFor='subtitulo' style={{ color: "red", textDecoration: "underline" }}>Apellido</label>
                                    <input type='text' className='form-control' value={nuevaNoticia.subtitulo}
                                        onChange={handleChange} name='subtitulo' />
                                </div>

                                <div className='col-6 mt-3'>
                                    <label className='form-label' htmlFor='autor' style={{ color: "red", textDecoration: "underline" }}>Autor</label>
                                    <input type='text' className='form-control' value={nuevaNoticia.autor}
                                        onChange={handleChange} name='autor' />
                                </div>
                            </div>

                            <div className='mt-3'>
                                <label className='form-label' htmlFor='texto' style={{ color: "red", textDecoration: "underline" }}>Texto de la noticia</label>
                                <textarea rows={15} cols={30} className='form-control' value={nuevaNoticia.texto}
                                    onChange={handleChange} name='texto' />
                            </div>
                            <button type='submit' className='btn btn-success mt-5'>Enviar Cambios</button>
                        </form>
                    </div>
                    <button className='btn btn-block' onClick={closeModal}>X</button>
                </div>
            </div>
        </>
    )
}

export default EditForm;