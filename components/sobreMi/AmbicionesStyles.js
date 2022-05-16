import styled from "styled-components";

const Container = styled.article`
display: grid;
grid-template-columns: 1fr;
justify-items: center;
margin-top: 25px;
padding: 0 10px 50px 10px;

@media (min-width: ${({theme})=> theme.breakpoint.mobile}) {
    align-content: center;
    /* grid-column: 1/3;
    grid-row: 3/4; */
}
`
const Title = styled.h2`
display: flex;
flex-wrap: wrap;
font-family: ${({theme})=> theme.fonts.primary};
font-weight: lighter;
letter-spacing: 1px;
font-size: 35px;
color: ${({theme})=> theme.colors.c2};

@media (min-width: ${({theme})=> theme.breakpoint.tablet}){
    font-size: 37px;
}
`
const Ambiciones = styled.p`
font-size: 18px;
color: ${({theme})=> theme.colors.c1};
padding: 0 9%;
line-height: 2;
font-size: 21px;
@media (min-width: ${({theme})=> theme.breakpoint.tablet}){
    font-size: 22px;
}
`

export {
    Container,
    Title,
    Ambiciones
}