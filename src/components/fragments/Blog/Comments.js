import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Comments = () => {
    const [comment, setComment] = useState([]);

    useEffect(() => {
        const endpoint = `http://localhost:3001/Comentarios`;

        axios.get(endpoint)
            .then((response) => {
                const data = response.data;
                console.log(data);
                setComment(data);
            })
    }, []);

    return (
        <div className='container'>
            <h2 className='text-center comentarios_title'>Comentarios</h2>
            {comment ?
                comment.map((comment) => {
                    const { nombre, apellido, comentario } = comment;
                    return (
                        <div className='container mt-5'>
                            <article class="message">
                                <div class="message-header">
                                    <h6>{nombre} {apellido}</h6>
                                </div>
                                <div class="message-body">
                                    {comentario}
                                </div>
                            </article>
                        </div>
                    )
                }) :

                <h4>No hay comentarios</h4>
            }
        </div>
    )
}

export default Comments;