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
        const email = ev.target.email.value;
        const password = ev.target.password.value;
        const regexEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(.+))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;


        if (email === '' || password === '') {
            SwAlert(<div><h2>Los campos no pueden estar vacios</h2>
                <h3>Por favor ingrese datos válidos</h3></div>);
            return;
        }

        if (email !== '' && !regexEmail.test(email)) {
            SwAlert('Debes ingresar una dirección de email válida.');
            return;
        }

        if (email !== "challenge@alkemy.org" || password !== "react") {
            SwAlert('Credenciales inválidas');
            return;
        }

        console.log('listo! vamos a loguear')

        axios.post('http://localhost:3001/user', { email, password })
            .then(response => {
                SwAlert(<h4>Vamos a redireccionarte al panel de usuario</h4>)
                navigate('/admin')
            })
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
                                <div class="field">
                                    <p class="control has-icons-left has-icons-right">
                                        <input class="input" type="email" placeholder="Email" name='email' />
                                        <span class="icon is-small is-left">
                                            <i class="fas fa-envelope"></i>
                                        </span>
                                        <span class="icon is-small is-right">
                                            <i class="fas fa-check"></i>
                                        </span>
                                    </p>
                                </div>
                                <div class="field">
                                    <p class="control has-icons-left">
                                        <input class="input" type="password" placeholder="Password" name='password' />
                                        <span class="icon is-small is-left">
                                            <i class="fas fa-lock"></i>
                                        </span>
                                    </p>
                                </div>
                                <div class="field">
                                    <p class="control">
                                        <button type='submit' class="button is-success">
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