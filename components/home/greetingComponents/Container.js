import styled from "styled-components";

const Box = styled.article`
    display: flex;
    flex-wrap: wrap;
    grid-template-columns: 1fr;
    align-content: flex-start ;
    margin-left: 10%;
    flex-direction: column;
    @media (min-width: ${({theme})=> theme.breakpoint.miniTablet}) {
        align-content: center;
    }
`

const Container = ({children})=> {
    return(
        <Box>{children}</Box>
    )
}
export default Container