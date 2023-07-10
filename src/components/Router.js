import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Aviso from "./links/Aviso";
import Politicas from "./links/Politicas";
import Admin from "./pages/Admin";
import NoticiaDetalle from './fragments/Info/NoticiaDetalle';
import Login from './links/Login';

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/admin" element={<Admin />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/detalle" element={<NoticiaDetalle />} />
            <Route path="/aviso" element={<Aviso />} />
            <Route path="/politicas" element={<Politicas />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}

export default Router;