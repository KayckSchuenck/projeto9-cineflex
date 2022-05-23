import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import TodosLugares from './todoslugares';
import { useNavigate } from 'react-router-dom';
import loading from './assets/Spinner-2s-200px.svg';

export default function Tela3(){
    const navigate=useNavigate()
    const{idLugares}=useParams()
    const[lugares,setLugares]=useState("")
    const[ids,setIds]=useState([])
    const[cpf,setCpf]=useState("")
    const[comprador,setComprador]=useState("")

    useEffect(()=>{
        const promise=axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idLugares}/seats`)
        promise.then(response=>{
            response.data.seats=response.data.seats.map(elemento=>({...elemento,escolhido:false}))
            setLugares(response.data)
        })
    },[])

    function handleSubmit(e){   
        e.preventDefault()
        if(ids.length===0){alert("Selecione ao menos um assento"); return}
        const postFinal={
            ids:ids,
            name:comprador,
            cpf:cpf
        }
      const promise=axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",postFinal)
      promise.then(()=>navigate('/sucesso',{state:{sessao:lugares,final:postFinal}}))
      promise.catch(erro=>alert(`Erro ${erro.response.status}, tente novamente`))
    }

    if(lugares==="") return (<div className='separador'><img src={loading}/></div>)
    else { 
        return(
          <>
            <div className='separador'>Selecione o(s) assentos </div>
            <TodosLugares setLugares={setLugares} lugares={lugares} ids={ids} setIds={setIds}/>
            <Form onSubmit={handleSubmit}>
                <label htmlFor='Nome'>Nome do comprador:</label>
                <input id="Nome" type="text" placeholder='Digite seu nome...' value={comprador} onChange={(e)=> setComprador(e.target.value)} required/>
                <label htmlFor='CPF'>CPF do comprador:</label>
                <input id="CPF" type="number" placeholder='Digite seu CPF...' value={cpf} onChange={(e)=> setCpf(e.target.value)} required min={10000000000} max={99999999999}/>
                <button type="submit">
                    Reservar assento(s)
                </button>
            </Form>

            <footer>
                <img src={lugares.movie.posterURL}/> {lugares.movie.title}
                <br/>{lugares.day.date} - {lugares.name}
            </footer>
          </>
        )
    }
}


const Form=styled.form`
display: flex;
flex-direction: column;
justify-content:center;
color:#293845;
margin-left: 24px;
align-items: flex-start;
margin-top: 40px;
font-size: 18px;
margin-bottom: 118px;
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