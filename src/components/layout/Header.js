import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../links/Login';

const Header = () => {

    /*Para desplegar la barra de navegación vamos a usar los estados de react con useState
    primero que nada declararé la variable isActive con un estado booleano para luego usarla
    en un evento de click en el cuál cambiara su estado entre verdadero o falso
    */
    const [isActive, setIsActive] = useState(false);

    //Evento de click en el cuál se cambia el estado de la variable declarada anteriormente como isActive
    const handleClick = () => {
        //Cambia el valor de la variable de falso a verdadero y viceversa
        setIsActive(!isActive);
    };


    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item">
                    <img alt='logo de vive proyectando' src="img/justicialismo.png" width="112" height="60" />
                </Link>

                {/** Agregamos el evento junto con el operador ternario para que cuando el estado de la variable isActive sea verdadero
                    * se le indique al programa que agregue al ícono de hamburguesa de la barra de navegación, la clase "is-active" que
                    * desplegará la barra cuando se esté ejecutando en un teléfono movil 
                */}
                <Link role="button" className={`navbar-burger ${isActive ? 'is-active' : ''} `} aria-label="menu" aria-expanded="false"
                    data-target="navbarBasicExample" onClick={handleClick}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </Link>

            </div>

            {/** También agregamos el operador ternario en el menú para que éste se muestre,
                 * cuando el estado de la variable isActive sea verdadero. En caso de no agregar el operador en
                 * ésta sección, el menú no se mostrará al desplegar la barra de navegación en la versión móvil.
            */}

            <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                <div className="navbar-start">
                    <Link className="navbar-item" to="/">
                        Inicio
                    </Link>

                    <Link className="navbar-item" to="/about">
                        Sobre
                    </Link>
                    <Link className="navbar-item" to="/contacto">
                        Contacto
                    </Link>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <Login />
                            {/**
                             *  <Link className="button is-primary" to="/login">
                                <strong>Ingresar</strong>
                            </Link> 
                            <Link className="button is-light" to="/registro">
                                Registrarse
                            </Link>
                            */}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;
