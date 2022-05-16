import styled,{keyframes} from "styled-components";
import Image from "next/image";
import cornerRight from "../public/cornerRight.png";
import cornerLeftC from "../public/cornerLeftC.svg";
import Javascript from "../public/logos/javascript.svg";
import orbita from "../public/orbita.svg";
import Header from "./header/Header";

const Container = styled.div`
    display: grid;
    grid-template-areas: 
    'header'
    'main';
    background-color: ${ ({theme})=> theme.colors.background};
    position: relative;
    min-height: 100vh;
    width: 100%;
    z-index: 9;
    overflow: hidden;
`
const Rotation = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const Orbita = styled.div`
position: fixed;
top: 20%;
right: 5%;
width: 225px;
z-index: 99;
pointer-events: none;
@media (min-width: ${({theme})=> theme.breakpoint.mobile}){
    right: 40%;
}
@media (min-width: ${({theme})=> theme.breakpoint.tablet}){
    width: 260px;
}

& img {
    animation: ${Rotation} infinite 7s linear;
}
`
const CornerRight = styled.div`
max-width: 196px;
position: absolute;
bottom: 0;
right: 0;
display: none;
@media (min-width: ${({theme})=> theme.breakpoint.tablet}){
    display: flex;
}
`
const CornerLeftInf = styled.div`
max-width: 196px;
position: absolute;
bottom: -10px;
left: 0;
@media (min-width: ${({theme})=> theme.breakpoint.tablet}){

}
`
const CornerCardLeft = styled.div`
display: flex;
flex-wrap: wrap;
position: absolute;
bottom:20px;
left: 10%;
z-index: 99;
display: none;
@media (min-width: ${({theme})=> theme.breakpoint.mobile}){
    left: 2%;
}
@media (min-width: ${({theme})=> theme.breakpoint.tablet}){
display: block;
}
`

const PageContainer = ({children})=>{
    return(
        <Container>

            <CornerCardLeft>
                <Image src={Javascript} layout='intrinsic' />
            </CornerCardLeft>

            <Orbita>
                <Image src={orbita} layout='intrinsic' priority/>
            </Orbita>
            <Header />
            
            {children}

            <CornerLeftInf>
                <Image src={cornerLeftC} layout='intrinsic' />
            </CornerLeftInf>

            <CornerRight>
                <Image src={cornerRight} layout='intrinsic' />
            </CornerRight>
            
        </Container>
    )
}

export default PageContainer