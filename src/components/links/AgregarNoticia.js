import React, { createRef, useState } from 'react';
import SwAlert from '@sweetalert/with-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddForm = ({ token }) => {

    const formRef = createRef();

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const openModal = (ev) => {
        setIsOpen(true);
    };

    const closeModal = (ev) => {
        setIsOpen(false);
    };

    const handleSubmit = (ev) => {

        const token = sessionStorage.getItem('token');

        const formData = new FormData(formRef.current);

        axios.post(`/noticias/agregar_noticia`, formData, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": 'multipart/form-data'
            }
        })
            .then(response => {

                SwAlert(<h4>Noticia publicada exitosamente</h4>)
                navigate(`/admin`)

            }).catch(error => {

                console.error(`Ocurrió un error: ${error}`);

            })
    }

    return (
        <>
            <div className="d-flex justify-content-center">
                <button onClick={openModal} className='button is-success'>Publicar una Noticia</button>
            </div>

            <div className={`modal  ${isOpen ? 'is-active' : ''}`}>
                <div className='modal-content'>
                    <div className='container'>
                        <form className='mt-5' onSubmit={handleSubmit} ref={formRef}>
                            <legend className='text-center'>Publicar una Noticia</legend>
                            <div className='row'>
                                <div className='col-6 mt-3'>
                                    <label className='form-label label text-center' htmlFor='titulo' style={{ textDecoration: "underline" }}>Titulo</label>
                                    <input type='text' className='form-control input is-success' placeholder='Titulo' name='titulo' />
                                </div>

                                <div className='col-6 mt-3'>
                                    <label className='form-label label text-center' htmlFor='subtitulo' style={{ textDecoration: "underline" }}>Apellido</label>
                                    <input type='text' className='form-control input is-success' placeholder='Subtitulo' name='subtitulo' />
                                </div>

                                <div className='col-6 mt-3 fiel'>
                                    <label className='form-label label text-center' htmlFor='autor' style={{ textDecoration: "underline" }}>Autor</label>
                                    <input type='text' className='form-control input is-success' placeholder="Autor" name='autor' />
                                </div>

                                <div className='col-6 mt-3'>
                                    <label className='form-label label text-center' htmlFor='autor' style={{ textDecoration: "underline" }}>Imagen</label>
                                    <input type='file' name='image' />
                                </div>

                                <div className='mt-3'>
                                    <label className='form-label label text-center' htmlFor='texto' style={{ textDecoration: "underline" }}>Texto de la noticia</label>
                                    <textarea rows={15} cols={30} className='form-control' placeholder='Noticia...' name='texto' />
                                </div>
                                <button type='submit' className='button is-success mt-5'>Publicar</button>
                            </div>
                        </form>
                    </div>
                    <button className='btn btn-block' onClick={closeModal}>X</button>
                </div>
            </div>
        </>
    )
}

export default AddForm;