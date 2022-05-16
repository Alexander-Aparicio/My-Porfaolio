import styled from "styled-components";

const TitleH2 = styled.h2`
font-size: 1.9rem;
color: ${ ({theme})=> theme.colors.c2};
font-family: ${({theme})=> theme.fonts.secundary};
margin-top: 5px;
font-size: 25px;
z-index: 99;
& span{
    color: ${({theme}) => theme.colors.c3};
}
`
const Profession = ({children})=>{
    return(
            <TitleH2>
                {children}
            </TitleH2>
    )
}

export default Profession