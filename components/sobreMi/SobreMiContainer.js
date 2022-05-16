import styled from "styled-components";

const Container = styled.main`
width: 100%;
max-width: 700px;
display: grid;
align-content:space-evenly;
grid-template-columns: 1fr;
z-index: 99;
grid-gap: 20px;
margin: auto;
padding-bottom: 70px;
@media (min-width: ${({theme})=> theme.breakpoint.miniTablet}){
    grid-template-columns: 1fr 1fr;
    justify-items: center;
};
@media (min-width: ${({theme})=> theme.breakpoint.tablet}){
    max-width: 800px;
};
@media (min-width: ${({theme})=> theme.breakpoint.laptop}){
    margin: 0 auto;
    margin-top: -50px;
    max-width: 1000px;
}
`

const SobreMiContainer = ({children})=>{

    return(
        <Container>
            {children}
        </Container>
    )
}

export default SobreMiContainer