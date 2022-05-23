import styled from 'styled-components';

export default function TodosLugares(props){
    function selecionar(lugar,index){
        if (!lugar.isAvailable) return
        props.setLugares((lugares)=>{
            lugares.seats[index].escolhido=!lugar.escolhido;
            return lugares
            })
        if(lugar.escolhido){
            props.setIds(props.ids.filter(elemento=>elemento!==lugar.id))
        }
        else {
            props.setIds([...props.ids,lugar.id])
        }
    }

    return (
        <>
            <Assentos>
                {props.lugares.seats.map((elemento,index)=>{
                    return (
                        <Assento disponibilidade={elemento.isAvailable} escolhido={elemento.escolhido} onClick={()=>selecionar(elemento,index)}>
                             {elemento.name}
                        </Assento>
                    )}
                )}
          </Assentos>

          <Assentos>
            <Bloco>
                <Assento style={{backgroundColor:"#8DD7CF", borderStyle:'solid',borderColor:"#1AAE9E",borderWidth:1 }}></Assento> 
                Selecionado
            </Bloco>
            <Bloco>
                <Assento style={{backgroundColor:"#C3CFD9", borderStyle:'solid',borderColor:"#7B8B99",borderWidth:1 }}></Assento>
                Disponível
            </Bloco>
            <Bloco>
                <Assento style={{backgroundColor:"#FBE192", borderStyle:'solid',borderColor:"#F7C52B",borderWidth:1 }}></Assento>
                Indisponível
            </Bloco>
          </Assentos>
        </>
    )
}

const Assentos=styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
margin: 0 24px;
:nth-child(5){
justify-content: space-between;
}
`

const Assento=styled.span`
border-radius: 50%;
width: 26px;
height: 26px;
background-color: ${props=>{
    if(props.escolhido) return "#8DD7CF"
    if(props.disponibilidade) return "#C3CFD9"
    if(!props.disponibilidade) return "#FBE192"
    }};

display:flex;
align-items: center;
justify-content: center;
margin: 18px 8px 0 0;
border: 1px solid ${props=>{
    if(props.escolhido) return "#1AAE9E"
    if(props.disponibilidade) return "#7B8B99"
    if(!props.disponibilidade) return "#F7C52B"
    }};
    
cursor: ${props=>props.disponibilidade ? "pointer" : "auto"};
`

const Bloco=styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 13px;
color:#4E5A65;
`