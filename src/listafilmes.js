import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function ListaFilmes(){
    const [filmes, setFilmes] = useState([]);
    useEffect(()=>{
        const promise=axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
        promise.then(response=>{
            setFilmes(response.data)
        })
    }, [])

    return(
        <Filme>
            {filmes.map(element =>
                <img src={element.posterURL}/>
            )}
        </Filme>
    )
}

const Filme=styled.div`
img{
    border: 8px solid #ffffff;
    border-radius: 3px;
    margin:20px 30px 0 0;
    box-shadow: 0px 2px 4px 2px #0000001A;
}`