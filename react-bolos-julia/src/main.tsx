import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CadastroBolo from './pages/CadastroBolo';
import ListaBolo from './pages/ListaBolo';


ReactDOM.createRoot(document.getElementById('root')!).render(
  // exibe ela
  <React.StrictMode>
    {/* rotas */}
    {/* Componentes */}
    {/* caminho da rota */}
    <BrowserRouter>
      {/* 1 */}
      <Header />
      {/* 2 */}
      <Routes>
        {/* exibe a pagina principal */}
        <Route path='/' element={<Home />} />

        <Route path='cadastroBolo' element={<CadastroBolo/>} />

        <Route path='ListaBolo' element={<ListaBolo/>} />


      </Routes>
      {/* 3 */}






      <Footer />

    </BrowserRouter>

  </React.StrictMode>,
)
