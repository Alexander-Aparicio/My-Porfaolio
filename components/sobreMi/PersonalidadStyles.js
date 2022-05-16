import styled from "styled-components";

const Text = styled.p`
    padding: 0 9%;
    line-height: 2;
    font-size: 21px;
    color: ${({theme})=> theme.colors.c1};
    text-align: center;
    @media (min-width: ${({theme})=> theme.breakpoint.miniTablet}) {
        font-size: 22px;
    }
`
const BoxCerrar = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 10px;

& button {
    padding: 2px 7px;
    background-color: transparent;
    color: ${({theme})=> theme.colors.c4};
    font-size: 23px;
    border: solid 1px #fff5;
    border-radius: 7px;
    background-color: #0001;
}
`
const Container = styled.article`
display: grid;
grid-template-columns: 1fr;
justify-items: center;
margin-top: 25px;

@media (min-width: ${({theme})=> theme.breakpoint.mobile}) {
    align-content: center;
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

export {
    Text,
    BoxCerrar,
    Container,
    Title
}