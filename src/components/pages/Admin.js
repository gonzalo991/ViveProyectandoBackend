import React, { useEffect, useState } from 'react'
import { MdDeleteForever } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';
import axios from 'axios';
import { swAlert } from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom';


const Admin = () => {

    const [noticias, setNoticias] = useState([]);
    const navigate = useNavigate();
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NGE4NThmZDUzMWRjNzJhOTM4ZDMxZDMiLCJpYXQiOjE2ODg5Mzc3ODcsImV4cCI6MTY4OTExMDU4N30.7cce2zEvr5Il_3Z4zNb88TwQ17yhIDWEx-J6-TFzRcE";


    useEffect(() => {
        const endPoint = "/noticias";
        axios.get(endPoint).then(response => {
            const data = response.data;
            console.log(data);
            setNoticias(data);
        }
        )
    }, [])

    const handleEdit = (id) => {
        const endPoint = `/noticias/editar_noticia/${id}`;
        axios.put(endPoint, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
    }

    { /* const handleDelete = (id) => {
        const endPoint = `/noticias/borrar_noticia/${id}`;
        axios.delete(endPoint, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(response => {
            swAlert(<h5>Noticia Borrada</h5>)
        }).catch(error => {
            swAlert(<h5>No se pudo borrar la noticia</h5>);
        });
        navigate('/admin');
    }
*/}

    return (
        <>
            <div className="container mt-5 mb-5">
                <h1 className='text-center mt-5 mb-5'>Panel de Administrador</h1>
            </div>

            <div className="container mt-5">
                <table class="table table-stripped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Id Noticia</th>
                            <th scope="col">Noticia</th>
                            <th scope="col">Autor</th>
                            <th scope="col">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {
                                noticias.map(noticia => {
                                    return (
                                        <>
                                            <th scope="row">{noticia._id}</th>
                                            <td>{noticia.titulo}</td>
                                            <td>{noticia.autor}</td>
                                            <td><button type="button" class="btn btn-danger me-3"><MdDeleteForever className='mb-1' /></button>
                                                <button type="button" class="btn btn-warning"><AiFillEdit className='mb-1' /></button></td>
                                        </>
                                    )
                                })
                            }
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Admin;
