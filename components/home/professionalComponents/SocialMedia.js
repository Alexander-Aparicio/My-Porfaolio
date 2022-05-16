import styled from "styled-components";
import Image from "next/image"

const ContainerCards = styled.div`
display: none;
grid-template-columns: repeat(auto-fit, minmax(20px, 70px));
grid-gap: 15px;
width: 100%;
justify-content: center;
justify-items: center;

@media (min-width: ${({theme})=> theme.breakpoint.mobile}) {
    display: grid;
    grid-gap: 15px;
}
`
const Card = styled.div`
max-width: 40px;
max-height: 40px;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
transition: max-width 0.5s, max-height 0.5s;
@media (min-width: ${({theme})=> theme.breakpoint.mobile}) {
    cursor: pointer;
}
@media (min-width: ${({theme})=> theme.breakpoint.tablet}) {
    max-width: 55px;
    max-height: 55px;
}
@media (min-width: ${({theme})=> theme.breakpoint.laptop}){
    max-width: 65px;
    max-height: 65px;
    :hover{
        max-width: 60px;
        max-height: 60px;
    }
}
`

const SocialMedia = ({redesSociales})=>{
    return(
        <ContainerCards>

            { redesSociales 
                ? redesSociales.map((redSocial, index)=>(
                    <Card key={index}>
                        <Image src={redSocial.img} alt={redSocial.name} />
                    </Card>
                )) 
                :null
            }

        </ContainerCards>
    )
}

export default SocialMedia