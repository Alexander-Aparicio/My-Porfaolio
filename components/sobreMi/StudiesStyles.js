import styled from "styled-components";

const Container = styled.article`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
padding: 5px 5px 5px 5px;
min-height: 440px;
flex-direction: column;
@media (min-width: ${({theme})=> theme.breakpoint.miniTablet}){
    max-width: 700px;
}
`
const Title = styled.h2`
color: ${({theme})=> theme.colors.c2};
font-family:  ${({theme})=> theme.fonts.primary};
letter-spacing: 1px;
font-weight: lighter;
font-size: 35px;
width: 100%;
margin: 0;
text-align: center;
@media (min-width: ${({theme})=> theme.breakpoint.tablet}){
    font-size: 37px;
}
`
const Lista = styled.ul`
color: ${({theme})=> theme.colors.c1};
font-family:  ${({theme})=> theme.fonts.secundary};
padding: 0;
font-size:24px;
margin: 10px 0;

& li {
    list-style: none;
    margin:13px 7px;
    text-align: center;

    & span {
        color: ${({theme})=> theme.colors.c3};
    }
}
@media (min-width: ${({theme})=> theme.breakpoint.tablet}){
    font-size: 25px;
}
@media (min-width: ${({theme})=> theme.breakpoint.laptop}){
    font-size: 27px;
}
`

export {
    Container,
    Title,
    Lista
}