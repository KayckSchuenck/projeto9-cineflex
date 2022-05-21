import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import styled from 'styled-components';
import TodosLugares from './todoslugares';

export default function Tela3(){
    const{idLugares}=useParams()
    const[lugares,setLugares]=useState("")
    const[selecionado,setSelecionado]=useState(false)
    useEffect(()=>{
        const promise=axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idLugares}/seats`)
        promise.then(response=>{
            setLugares(response.data)
        })
    },[])

    if(lugares==="") return (<div className='separador'>Loading</div>)
    else { 
        return(
          <>
          <div className='separador'>Selecione o(s) assentos </div>
            <TodosLugares lugares={lugares} />
        <Form>
          Nome do comprador:
          <input type="text" placeholder='Digite seu nome...'/>
          CPF do comprador:
          <input type="text" placeholder='Digite seu CPF...'/>
          <button>
              Reservar assento(s)
          </button>
        </Form>

        <footer><img src={lugares.movie.posterURL} /> {lugares.movie.title}
                <br/> {lugares.day.weekday} - {lugares.day.date}
        </footer>
          </>
        )
    }
}


const Form=styled.div`
display: flex;
flex-direction: column;
justify-content:center;
color:#293845;
margin-left: 24px;
align-items: flex-start;
margin-top: 40px;
font-size: 18px;

input{
    width: 310px;
    height: 50px;
    border-radius: 3px;
    margin-bottom: 7px;
    font-size: 18px;
    padding: 18px;
    border: 1px solid #D4D4D4;
    color:#AFAFAF;
}
button{
    align-self: center;
    margin: 50px 0 30px;
    border-radius: 3px;
    background-color: #E8833A;
    color: white;
    width: 225px;
    height: 42px;
    font-size: 18px;
}
*:focus{
	outline: none;
}
`