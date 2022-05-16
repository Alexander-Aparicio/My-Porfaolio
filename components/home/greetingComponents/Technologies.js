import styled,{keyframes} from "styled-components";
import Image from "next/image"

const Rotation = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const ContainerCards = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
max-width: 360px;
z-index: 99;
margin-bottom: 25px;
@media (min-width: ${({theme})=>theme.breakpoint.miniTablet}){
    margin-bottom: revert;
}
`
const Card = styled.figure`
    max-width: 54px;
    max-height: 64px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;

    & figcaption {
        width: 100%; 
        display: flex;
        justify-content: center;
        padding: 0;
    }

    @media (min-width: ${({theme})=> theme.breakpoint.mobile}){
        max-width: 70px;
        max-height: 85px;
    }
    & .react {
        animation: ${Rotation} infinite 7s linear;
    }
`

const Technologies = ({tech})=>{

    return(
        <ContainerCards>

            { tech ? tech.map((el, index)=>(
                <Card key={index} ><Image src={el.img} className={el.styles}/></Card> 
            )): null }

        </ContainerCards>
    )
}

export default Technologies