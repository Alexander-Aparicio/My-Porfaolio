import styled from "styled-components";

const Text = styled.p`
font-size: 2rem;
z-index: 99;
color: ${ ({theme})=> theme.colors.c1};
font-family: ${({theme})=> theme.fonts.secundary};
margin: auto;
margin-bottom: 0;
@media (min-width: ${({theme})=> theme.breakpoint.mobile}){
    margin: 20px 0px;
}
`
const Welcome = ({children})=>{
    return(
        <Text>
           {children} 
        </Text>
    )
}

export default Welcome