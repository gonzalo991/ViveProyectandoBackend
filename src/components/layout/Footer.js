import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>

            <footer className="footer">
                <div className="content has-text-centered">
                    <p>
                        <strong>Vive Proyectando</strong> por <a href="https://jgthms.com">Cristian Fonseca</a>. Para más información sobre
                        el uso de ésta página revise el <Link to="/aviso">Aviso Legal</Link>. El contenido de éste sitio tiene
                        <Link to="/politicas"> Políticas de Privacidad</Link>.
                    </p>
                </div>

                <div className='d-flex column mt-3 justify-content-center'>
                    <ul className='footer_ul'>
                        <h5 className='footer_titles ms-5'>Redes: </h5>
                        <div className='d-flex flex-row mt-2'>
                            <li className='footer_li ms-3'>
                                <Link to="/#" className='footer_links'>
                                    <i className="fab fa-facebook footer_icon facebook"></i>
                                </Link>
                            </li>
                            <li className='footer_li ms-3'>
                                <Link to="/#" className='footer_links'>
                                    <i className="fab fa-instagram footer_icon instagram"></i>
                                </Link>
                            </li>
                            <li className='footer_li ms-3'>
                                <Link to="/#" className='footer_links'>
                                    <i className="fab fa-twitter-square footer_icon twitter"></i>
                                </Link>
                            </li>
                        </div>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer;