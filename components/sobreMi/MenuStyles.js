import styled from "styled-components";

const MenuContainer = styled.div`
display: grid;
grid-template-columns: 1fr;
justify-items: center;
padding-left: 0%;
grid-gap: 20px;
grid-row: 2/3;

@media (min-width: ${({theme})=> theme.breakpoint.mobile}) {
    margin: auto;
}
@media (min-width: ${({theme})=> theme.breakpoint.miniTablet}) {
    grid-row: 1/2;
    grid-column: 1/2;
}
`
const ButtonSobreMi = styled.button`
border-style: none; 
outline: inherit;
font-size: 25px;
padding: 7px 10px;
background-color: ${ (props)=> props.active ? ({theme})=> theme.colors.c2 : ({theme})=> theme.colors.background};
width: 200px;
border-radius: 5px;
cursor: pointer;
transition: background 0.5s;
box-shadow: 0px 0px 0px 1px rgba(242,233,242,1);
color: ${({theme})=> theme.colors.c1};
z-index: 101;

:hover {
    background-color: ${({theme})=> theme.colors.c2};
}
`

export {
    MenuContainer,
    ButtonSobreMi
} 
    