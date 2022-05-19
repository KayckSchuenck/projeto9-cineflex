import React from 'react';
import styled from 'styled-components';

export default function Header(){
    return (
        <Topo>
            CINEFLEX
        </Topo>
    )
}

const Topo=styled.div`
width:100%;
height:68px;
background-color:#C3CFD9;
position:fixed;
top:0;
color:#E8833A;
font-size:34px;
font-family:'Roboto', sans-serif;
display: flex;
align-items: center;
justify-content:center;
`;

