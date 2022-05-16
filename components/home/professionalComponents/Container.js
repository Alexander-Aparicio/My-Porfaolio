import styled from "styled-components";

const Box = styled.article`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    width: 100%;
    @media (min-width: ${({theme})=> theme.breakpoint.mobile}) {
    align-content: center;
    grid-template-columns: 1fr;
    }
`

const Container = ({children})=> {
    return(
        <Box>{children}</Box>
    )
}

export default Container