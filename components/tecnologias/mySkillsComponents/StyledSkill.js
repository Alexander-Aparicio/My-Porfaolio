import styled,{keyframes} from "styled-components";

const progress = keyframes`
from {
    width: 0%;
}
`
const timeVisibility = keyframes`
from {
    opacity: 0;
}
to {
    opacity: 1;
}
`
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
flex-wrap: wrap;
align-items: center;
width: 100%;
margin-bottom: 7%;
z-index: 99;
@media (min-width: ${({theme})=> theme.breakpoint.miniMobile}){
    flex-direction: row;
    width: 85%;
}
`
const Bar = styled.div`
width: 55%;
height: 25px;
background-color: #fff ;
border-radius: 5px;
padding: 5px;
`
const Level = styled.div`
width: ${ props => props.level ? props.level : '0'}%;
background-color: ${ props => props.color ? props.color : ''}; 
height: 100%;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
box-shadow: 4px 4px 5px 0px rgba(242,233,242,1);
animation: ${progress} ${ props => props.level ? props.level*0.017 : '0'}s linear;
`

const Text = styled.p`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
text-align: center;
margin: 0;
height: 100%;
color: ${({theme})=> theme.colors.background};
font-family: ${({theme})=> theme.fonts.primary};
animation: ${timeVisibility} 1s linear;
font-size: 15px;
`

const Name = styled.p`
display: flex;
flex-wrap: wrap;
font-family: ${({theme})=> theme.fonts.secundary};
color: ${ props => props.color ? props.color : ''}; 
margin: 0;
justify-content: center;
font-size: 1.7rem;
text-align: center;
line-height: 1;
@media (min-width: ${({theme})=> theme.breakpoint.miniMobile}){
    width: 35%;
}
`

export {
    Container,
    Bar,
    Level,
    Text,
    Name
}