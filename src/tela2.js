import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import styled from 'styled-components';
import loading from './assets/Spinner-2s-200px.svg'
export default function Tela2(){
    const {idFilme}=useParams()
    const [sessoes, setSessoes]= useState("");
    useEffect(()=>{
        const promise=axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
        promise.then(response=>{
            setSessoes(response.data)
        })
    },[])

  if(sessoes==="") return (<div className='separador'><img src={loading}/></div>)
  else { 
      return(
        <>
        <div className='separador'>Selecione o filme</div>
       {sessoes.days.map(({weekday,date},index)=>
            <Dia key={index}>
               {weekday} - {date} <br/>
               <Flex>
                    {sessoes.days[index].showtimes.map((e)=>
                        <Link to={`/sessao/${e.id}`}>
                            <Horario>
                            {e.name}
                            </Horario>
                        </Link>
                    )}
                </Flex>
            </Dia>
        )}

        <footer>
            <img src={sessoes.posterURL} /> {sessoes.title}
        </footer>
        </>
      )
  }
}

const Dia=styled.div`
font-size: 20px;
color: #293845;
margin: 22px 24px 0;
`

const Horario=styled.span`
display: flex;
justify-content: center;
align-items: center;
width: 84px;
height: 44px;
margin: 22px 8px 4px 0;
background-color: #E8833A;
color: white;
font-size:18px;
text-align: center;
border-radius: 3px;

`
const Flex=styled.div`
display: flex;
a{
    text-decoration: none;
}
`