import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import setinha from './assets/arrow-back-outline.svg'

export default function Header(props){

    const navigate = useNavigate()
    return (
        <>
        <Voltar display={props.display}>
            <img src={setinha} onClick={()=>navigate(-1)}/>
        </Voltar>
        <Topo>
            CINEFLEX
        </Topo>
        </>
    )
}

const Topo=styled.div`
width:100%;
height:68px;
background-color:#C3CFD9;
position:fixed;
top:0;
left: 0;
color:#E8833A;
font-size:34px;
font-family:'Roboto', sans-serif;
display: flex;
align-items: center;
justify-content:center;
`
const Voltar=styled.button`
position: fixed;
top: 12px;
left: 0;
z-index: 1;
display: ${props=>(props.display ? "inherit" : "none")};
img {
    height: 40px;
    width: 30px;
}
`

