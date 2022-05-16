import styled from "styled-components"

const Container = styled.div`
display: grid;
width: 100%;
grid-template-columns: 1fr;
justify-items: center;

@media (min-width: ${({theme})=> theme.breakpoint.mobile}) {
    margin: auto;
};

@media (min-width: ${({theme})=> theme.breakpoint.tablet}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 25px;
}

@media (min-width: ${({theme})=> theme.breakpoint.laptop}) {
    margin-top: 4%;
}
`
export default Container