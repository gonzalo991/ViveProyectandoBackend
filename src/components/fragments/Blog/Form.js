import React, { useState } from 'react';
import SwAlert from '@sweetalert/with-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Form = () => {

    let query = new URLSearchParams(window.location.search);
    let id_noticia = query.get('id_noticia');

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const openModal = (ev) => {
        setIsOpen(true);
    };

    const closeModal = (ev) => {
        setIsOpen(false);
    };


    const handleSubmit = (ev) => {
        const id_noticia_comentario = id_noticia;
        const nombre = ev.target.nombre.value;
        const apellido = ev.target.apellido.value;
        const comentario = ev.target.comentario.value;

        if (nombre === null || nombre === undefined) {
            SwAlert(<h4>Debes ingresar tu nombre</h4>)
            return;
        }

        if (apellido === null || apellido === undefined) {
            SwAlert(<h4>Debes ingresar tu apellido</h4>)
            return;
        }

        if (comentario === null || comentario === undefined) {
            SwAlert(<h4>Debes agregar tu comentario</h4>)
            return;
        }

        console.log('vamos a enviar el comentario');

        axios.post('', { id_noticia_comentario, nombre, apellido, comentario })
            .then(response => {
                SwAlert(<h4>Comentario publicado exitosamente</h4>)
                navigate(`/detalle?id_noticia=${id_noticia}`)
            })
    }

    return (
        <>
            <button onClick={openModal} className='btn btn-success'>Comentar</button>
            <hr />
            <div className={`modal  ${isOpen ? 'is-active' : ''}`}>
                <div className='modal-content'>
                    <div className='container'>
                        <form className='mt-5' onSubmit={handleSubmit}>
                            <div className='row'>
                                <div className='col-6 mt-3'>
                                    <label className='form-label' htmlFor='nombre'>Nombre</label>
                                    <input type='text' className='form-control' placeholder='Nombre...' name='nombre' />
                                </div>

                                <div className='col-6 mt-3'>
                                    <label className='form-label' htmlFor='apellido'>Apellido</label>
                                    <input type='text' className='form-control' placeholder='Apellido...' name='apellido' />
                                </div>
                            </div>

                            <div className='mt-3'>
                                <label className='form-label' htmlFor='comentario'>Comenta aquí</label>
                                <textarea rows={10} cols={15} className='form-control' placeholder='Comentario...' name='comentario' />
                            </div>
                            <button type='submit' className='btn btn-success mt-5'>Enviar Comentario</button>
                        </form>
                    </div>
                    <button className='btn btn-block' onClick={closeModal}>X</button>
                </div>
            </div>
        </>
    )
}

export default Form