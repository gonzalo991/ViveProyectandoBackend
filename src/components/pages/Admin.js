import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { swAlert } from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom';
import EditForm from '../links/EditarForm';
import AddForm from '../links/AgregarNoticia';
import DeleteButton from '../links/BorrarNoticia';


const Admin = () => {

    const [noticias, setNoticias] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        let token = sessionStorage.getItem('token');

        if (!token || token === null) {
            navigate('/');
        }

        const endPoint = "/noticias";
        axios.get(endPoint).then(response => {
            const data = response.data;
            setNoticias(data);
            console.log('Desde admin se uso get noticias');
        }).catch(error => {
            swAlert(<h5>Tuvimos un error, vuelve más tarde</h5>)
        })
    }, [navigate])


    return (
        <>
            <div className="container mt-5 mb-5">
                <h1 className='text-center mt-5 mb-5' style={{ fontSize: "1.9rem", textDecoration: "underline" }}>Panel de Administrador</h1>
            </div>

            <AddForm />

            <div className="container mt-5 mb-5">
                <table className="table table-stripped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Id Noticia</th>
                            <th scope="col">Noticia</th>
                            <th scope="col">Autor</th>
                            <th scope="col">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            noticias.map(noticia => {
                                const tokenSession = sessionStorage.getItem('token');
                                return (
                                    <>
                                        <tr>
                                            <th>{noticia._id}</th>
                                            <td>{noticia.titulo}</td>
                                            <td>{noticia.autor}</td>
                                            <td>
                                                <EditForm noticia={noticia} token={tokenSession} />
                                                <DeleteButton noticia={noticia} />
                                            </td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Admin;
