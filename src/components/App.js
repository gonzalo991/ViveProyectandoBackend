import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bulma/css/bulma.css';
import Header from './layout/Header';
import { HashRouter } from 'react-router-dom';
import Router from './Router';
import Footer from './layout/Footer';

function App() {
    return (
        <>
            <HashRouter>

                <Header />


                <main>

                    <Router />

                </main>

                <Footer />
            </HashRouter>

        </>
    );
}

export default App;