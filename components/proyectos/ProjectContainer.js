import styled from "styled-components";

const Container = styled.main`
margin-top: 15px;
width: 100%;
max-width: 1500px;
display: grid;
align-content: center;
grid-template-columns: 1fr;
z-index: 99;
padding-bottom: 80px;
@media (min-width: ${({theme})=> theme.breakpoint.mobile}){
    grid-template-columns: 1fr;
    justify-items: center;
}
@media (min-width: ${({theme})=> theme.breakpoint.laptop}){
    margin: 0 auto;
}
`
const ProjectContainer = ({children})=>{
    return(
        <Container>
            {children}
        </Container>
    )
}

export default ProjectContainer