import React, { useState } from 'react';
import SwAlert from '@sweetalert/with-react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const openModal = (ev) => {
        setIsOpen(true);
    };

    const closeModal = (ev) => {
        setIsOpen(false);
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();

        try {
            const username = ev.target.username.value;
            const password = ev.target.password.value;

            if (username === '' || password === '') {
                SwAlert(<div><h2>Los campos no pueden estar vacios</h2>
                    <h3>Por favor ingrese datos válidos</h3></div>);
                return;
            }

            axios.post('/login/ingresar', { username, password })
                .then(response => {
                    const tokenRecibido = response.data.token;
                    sessionStorage.setItem('token', tokenRecibido)
                    SwAlert(
                        <h4>Vamos a redireccionarte al panel de usuario</h4>
                    )
                    navigate('/admin')
                }).catch(error => {
                    console.error(`Ocurrio un error: ${error}`);
                })

        } catch (error) {
            console.error(`Ocurrió un error: ${error}`);
        }

    }

    return (
        <div>
            <Link onClick={openModal} className="button is-primary">
                <strong>Ingresar</strong>
            </Link>
            {isOpen && (
                <div className={`modal ${isOpen ? 'is-active' : ''}`}>
                    <div className="modal-content">
                        <div className='container'>
                            <form className='mt-5' onSubmit={handleSubmit}>
                                <div className="field">
                                    <p className="control has-icons-left has-icons-right">
                                        <input className="input" type="text" placeholder='Username' name='username' />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-envelope"></i>
                                        </span>
                                        <span className="icon is-small is-right">
                                            <i className="fas fa-check"></i>
                                        </span>
                                    </p>
                                </div>
                                <div className="field">
                                    <p className="control has-icons-left">
                                        <input className="input" type="password" placeholder='Contraseña' name='password' />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-lock"></i>
                                        </span>
                                    </p>
                                </div>
                                <div className="field">
                                    <p className="control">
                                        <button type='submit' className="button is-success">
                                            Login
                                        </button>
                                    </p>
                                </div>
                            </form>
                        </div>
                        <button className='btn btn-block' onClick={closeModal}>X</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Login