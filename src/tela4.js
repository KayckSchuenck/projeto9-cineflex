import styled from "styled-components"
import { Link,useLocation } from "react-router-dom"

export default function Tela4(){
    const {state}=useLocation()
    console.log(state)
    return(
        <>
        <div className="separador final">Pedido feito com sucesso</div>
        <TextoFinal>
            <span>Filme e sessão</span>
            <br/>{state.sessao.movie.title}
            <br/>{state.sessao.day.date} {state.sessao.name}
        </TextoFinal>

        <TextoFinal>
            <span>Ingressos</span>
            {state.final.ids.map(elemento=>
              <> <br/>Assento {elemento%50} </>)}
        </TextoFinal>

        <TextoFinal>
            <span>Comprador</span>
            <br/> Nome: {state.final.name}
            <br/> CPF: {state.final.cpf}
        </TextoFinal>

        <Flex>
            <BotaoFinal>
            <Link to={'/'} >
            Voltar para home
            </Link>
            </BotaoFinal>
        </Flex>
        
        </>
    )
}

const TextoFinal=styled.div`
font-size: 22px;
margin:15px 30px 25px;
color:#293845;
span{
    font-size: 24px;
    font-weight: 700;
}
`
const BotaoFinal=styled.button`
display: flex;
justify-content: center;
align-items: center;
    margin-top: 40px;
    border-radius: 3px;
    background-color: #E8833A;
    width: 225px;
    height: 42px;
    font-size: 18px;
    a{
        text-decoration: none;
        color: white;
    }
`
const Flex=styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 20px;
`

