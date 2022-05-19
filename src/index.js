//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
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import './assets/reset.css'
import './assets/style.css'
import Tela1 from './tela1';



function App() {
  return (
    <Tela1 />
  )}


ReactDOM.render(
    <App />, document.querySelector('.root')
  );
