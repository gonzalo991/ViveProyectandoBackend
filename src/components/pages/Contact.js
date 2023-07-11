import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      <div className='d-flex justify-content-center'>
        <h2 className='text-center mt-5' style={{fontSize: "2rem"}}>Formulario de Contacto</h2>
      </div>

      <form className='container row mt-5'>
        <div className="field text-center col-6">
          <label className="label">Nombre</label>
          <div class="control">
            <input className="input is-success" type="text" placeholder="Nombre" name='nombre'/>
          </div>
        </div>

        <div className="field text-center col-6">
          <label className="label">Apellido</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input is-success" type="text" placeholder="Apellido" name='apellido' />
          </div>
        </div>

        <div className="field text-center col-6">
          <label className="label text-center">Email</label>
          <div className="control has-icons-right">
            <input className="input is-success" type="email" placeholder="hello@example.com" name='email' />
          </div>
        </div>

        <div className="field text-center col-6">
          <label className="label text-center">Telefono</label>
          <div className="control has-icons-right">
            <input className="input is-success" type="text" placeholder="123-12345678" name='phone' />
          </div>
        </div>

        <div className="field">
          <label className="label text-center">Mensaje</label>
          <div className="control">
            <textarea className="textarea is-success" placeholder="Textarea"></textarea>
          </div>
        </div>


        <div className="field is-grouped">
          <div className="control">
            <button className="button is-success">Enviar</button>
          </div>
          <div className="control">
            <Link className="button is-link is-light" to="/">Cancelar</Link>
          </div>
        </div>
      </form>
    </>
  )
}

export default Contact;