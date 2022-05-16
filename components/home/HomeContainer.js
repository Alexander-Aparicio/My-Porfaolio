import styled from "styled-components";

const Container = styled.main`
    width: 100%;
    max-width: 1800px;
    display: grid;
    grid-template-columns: 1fr;
    z-index: 99;
    align-content:start;

    @media (min-width: ${({theme})=> theme.breakpoint.mobile}){
        grid-template-columns: 1fr 1fr;

    }
    @media (min-width: ${({theme})=> theme.breakpoint.miniTablet}){
        padding-top: 0;
        align-content: center;
    }
    @media (min-width: ${({theme})=> theme.breakpoint.laptop}){
        margin: 0 auto;
        margin-top: -50px;
    }
`

const HomeContainer = ({children})=>{
    return(
        <Container>
            {children}
        </Container>
    )
}

export default HomeContainer