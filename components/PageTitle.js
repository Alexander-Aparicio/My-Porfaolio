import styled from "styled-components";

const PageTitle = styled.h1`
display: flex;
flex-wrap: wrap;
position: absolute;
top:20px;
left: 5%;
font-family: ${({theme})=> theme.fonts.primary};
font-weight: lighter;
letter-spacing: 1px;
font-size: 33px;
color: ${({theme})=> theme.colors.c1};
z-index: 102;
@media (min-width: ${({theme})=> theme.breakpoint.mobile}){
    left: 1%;
    font-size: 34px;
};

@media (min-width: ${({theme})=> theme.breakpoint.tablet}){
    font-size: 38px;
}
@media (min-width: ${({theme})=> theme.breakpoint.laptop}){
    font-size: 45px;
}
`
export default PageTitle