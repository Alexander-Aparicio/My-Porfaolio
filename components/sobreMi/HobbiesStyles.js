import styled from "styled-components"

const Container = styled.article`
display: grid;
grid-template-columns: 1fr;
justify-items: center;
margin-top: 25px;
padding: 0 10px 50px 10px;

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
const Hobbies = styled.ul`
color: ${({theme})=> theme.colors.c1};
font-family:  ${({theme})=> theme.fonts.secundary};
padding: 0;
font-size:21px;
margin: 0;
text-align: center;
& li {
    list-style: none;
    margin:11px 7px;
}
@media (min-width: ${({theme})=> theme.breakpoint.tablet}){
    font-size: 22px;
}
`

export {
    Container,
    Title,
    Hobbies
}