import React from 'react';
import styled from 'styled-components';
import Header from './header.js'
import ListaFilmes from './listafilmes.js';

export default function Tela1(){
    return(
    <>
        <Header />
        <div className='separador'>Selecione o filme</div>
        <Filmes>
            <ListaFilmes/>
        </Filmes>
    </>
    )
}

const Filmes=styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin:10px 30px;
width: 100%;
img{
    width: 130px;
    height: 192px;
}
`

