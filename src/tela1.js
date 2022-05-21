import React from 'react';
import styled from 'styled-components';
import ListaFilmes from './listafilmes.js';

export default function Tela1(){
    return(
    <>
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
    border: 8px solid #ffffff;
    border-radius: 3px;
    margin:20px 30px 0 0;
    box-shadow: 0px 2px 4px 2px #0000001A;
}
`

