import styled from "styled-components";

const Container = styled.main`
    width: 100%;
    max-width: 1800px;
    display: grid;
    grid-template-columns: 1fr;
    z-index: 99;
    align-content: center;
    padding-bottom: 70px;
 
    @media (min-width: ${({theme})=> theme.breakpoint.miniMobile}) {
        margin-top: 0vh;
    }
    @media (min-width: ${({theme})=> theme.breakpoint.mobile}){
        grid-template-columns: 1fr;
        justify-items: center;
    }
    @media (min-width: ${({theme})=> theme.breakpoint.laptop}){
        margin: 0 auto;
    }
`

const TechContainer = ({children})=>{
    return(
        <Container>
            {children}
        </Container>
    )
}

export default TechContainer