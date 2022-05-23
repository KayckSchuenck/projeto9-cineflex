import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import './assets/reset.css'
import './assets/style.css'
import Header from './header';
import Tela1 from './tela1';
import Tela2 from './tela2';
import Tela3 from './tela3';
import Tela4 from './tela4';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Tela1 />} />
        <Route path="/sessoes/:idFilme" element={<Tela2 />} />
        <Route path="/sessao/:idLugares" element={<Tela3 />} />
        <Route path="/sucesso" element={<Tela4 />}/>
      </Routes>
    </BrowserRouter>
  )}


ReactDOM.render(
    <App />, document.querySelector('.root')
  );
