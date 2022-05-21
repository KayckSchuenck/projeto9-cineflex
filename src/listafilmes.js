import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

export default function ListaFilmes(){
    const [filmes, setFilmes] = useState([]);
    useEffect(()=>{
        const promise=axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
        promise.then(response=>{
            setFilmes(response.data)
        })
    }, [])
    return(
        <>
            {filmes.map(element =>
            <Link to={`/sessoes/${element.id}`}>
                <img src={element.posterURL}/>
            </Link>
            )}
        </>
    )
}