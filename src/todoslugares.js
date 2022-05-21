import styled from 'styled-components';
export default function TodosLugares(props){
    return (
        <>
            <Assentos>
                {props.lugares.seats.map((elemento)=>{
                    return (
                        <Assento disponibilidade={elemento.isAvailable}>
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
:nth-child(4){
justify-content: space-between;
}
`

const Assento=styled.span`
border-radius: 50%;
width: 26px;
height: 26px;
background-color: ${props=>{
    if(props.disponibilidade==="check"){
        return "#8DD7CF"
    }
    if(props.disponibilidade===true){
        return "#C3CFD9"
    } if(props.disponibilidade===false){
        return "#FBE192"
    }
    }};
display:flex;
align-items: center;
justify-content: center;
margin: 18px 8px 0 0;
border: 1px solid ${props=>props.disponibilidade ? "#7B8B99" : "#F7C52B" };
`

const Bloco=styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 13px;
color:#4E5A65;
`