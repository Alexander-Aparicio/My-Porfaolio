import styled from "styled-components";

const Container = styled.article`
display: grid;
grid-template-columns: 1fr;
grid-gap: 20px;
justify-items: center;
width: 100%;
grid-row: 1/2;
z-index: 101;

@media (min-width: ${({theme})=> theme.breakpoint.miniTablet}) {
    grid-column: 2/3;
    grid-row: 1/2;
}
`
const BoxImg = styled.div`
max-width: 90%;
margin: auto;
& img {
    width: 100%;
}
@media (min-width: ${({theme})=> theme.breakpoint.mobile}){
    max-width: 400px;
} 
`

export {
    Container,
    BoxImg
}