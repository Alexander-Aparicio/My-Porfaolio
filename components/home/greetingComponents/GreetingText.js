import styled from "styled-components";

const Greeting = styled.h1`
font-size: 2.5rem;
letter-spacing: 1px;
font-weight: lighter;
z-index: 99;
color: ${({theme})=> theme.colors.c1};
font-family: ${({theme})=> theme.fonts.primary};
margin-bottom: 5px;
@media (min-width: ${({theme})=> theme.breakpoint.tablet}){
    font-size: 3rem;
}
@media (min-width: ${({theme})=> theme.breakpoint.laptop}){
    font-size: 3.4rem;
}
`
const GreetingText = ({children})=>{
    return(
        <Greeting>
            {children}
        </Greeting>
    )
}

export default GreetingText