import styled from "styled-components"

const Repository = styled.div`
box-sizing: border-box;
display: grid;
grid-template-areas:
'text' 'img';
grid-gap: 12px;
z-index: 99;
margin-bottom: 13px;
border: solid 1px #fff5;
padding: 10px 20px;
border-radius: 10px;
background-color: #0003;
box-shadow: 1px 1px 1px #fff5;
width: 90%;
max-width: 430px;

:hover {
    background-color: #0007;
}

@media (min-width: ${({theme})=> theme.breakpoint.miniMobile}){
    grid-template-areas:
    'text img';
    grid-gap: 16px;
    margin-bottom: 20px;
    width: 95%;
}
@media (min-width: ${({theme})=> theme.breakpoint.tablet}){
    
}
`
const Project = styled.a`
color: ${({theme})=> theme.colors.c1};
text-decoration: none;
grid-area: 'text';
display: flex;
flex-wrap: wrap;
width: 100%;
justify-content: baseline;
font-family: ${({theme})=> theme.fonts.secundary};
`
const Web = styled.h2`
display: flex;
font-size: 20px;
margin-bottom: 5px;
width: 100%;
font-weight: lighter;

@media (min-width: ${({theme})=> theme.breakpoint.miniMobile}){
    font-size: 23px;
}
@media (min-width: ${({theme})=> theme.breakpoint.mobile}){
    font-size: 25px;
}
@media (min-width: ${({theme})=> theme.breakpoint.tablet}){
    font-size: 30px;
}
`
const Technology = styled.p`
color: ${ props => props.color ? props.color :(({theme})=> theme.colors.c3)};
font-size: 16px;
margin: 0;
& span {
    color: ${({theme})=> theme.colors.c2}; 
}
@media (min-width: ${({theme})=> theme.breakpoint.miniMobile}){
    font-size: 21px;
}
@media (min-width: ${({theme})=> theme.breakpoint.tablet}){
    font-size: 23px;
}
`
const Card = styled.div`
grid-area: 'img';
width: 25px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100%;
@media (min-width: ${({theme})=> theme.breakpoint.miniMobile}){
    width: 50px;
}
`
export {
    Repository,
    Project,
    Web,
    Technology,
    Card
}