import React from "react";
import axios from "axios";
import { MdDeleteForever } from 'react-icons/md';
import SwAlert from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";

const DeleteButton = ({ noticia }) => {
    const token = sessionStorage.getItem('token');
    const _id = noticia._id;
    const navigate = useNavigate();

    const handleDelete = (ev) => {
        if (confirm("¿Seguro que deseas borrar esta noticia?")) {
            axios.delete(`/noticias/borrar_noticia/${_id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(response => {
                    SwAlert(<h5>Noticia borrada con éxito</h5>);
                })
                .catch(error => {
                    console.error(`Se produjo un error al borrar: ${error}`);
                })
        }
    }

    return (
        <button type="button" className="btn btn-danger ms-3" onClick={handleDelete}><MdDeleteForever className='mb-1' /></button>
    )
}

export default DeleteButton;