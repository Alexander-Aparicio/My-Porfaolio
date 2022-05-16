import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    padding-left: 0%;
    padding-top: 15px;

    @media (min-width: ${({theme})=> theme.breakpoint.mobile}) {
        margin: auto;
        margin-top: 35px;
        width: 400px;
    };
    @media (min-width: ${({theme})=> theme.breakpoint.tablet}) {
        margin-top: -30px;
        grid-template-columns: 1fr 1fr;
        width: 850px;
    };
    @media (min-width: ${({theme})=> theme.breakpoint.laptop}) { 
        width: 1000px;
    }
`

const ContainerSkills = ({children}) =>{
    return(
        <Container>{children}</Container>
    )
}

export default ContainerSkills