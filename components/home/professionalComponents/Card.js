import styled from "styled-components";
import Image from "next/image";

const BoxImage = styled.div`
display: flex;
contain: content;
max-width: 91px;
border-radius: 100%;
background-color: #fff;
z-index: 99;
@media (min-width: ${({theme})=> theme.breakpoint.mobile}){
    max-width: 120px;
}
@media (min-width: ${({theme})=> theme.breakpoint.tablet}){
    max-width: 150px;
}
@media (min-width: ${({theme})=> theme.breakpoint.laptop}){
    max-width: 170px;
}
`
const Card = ({img})=>{
    return(

        <BoxImage>
            <Image src={img} layout='intrinsic' />
        </BoxImage>

    )
}

export default Card