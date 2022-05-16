import styled from "styled-components"

const BoxButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 20px;
    
    & button {
        padding: 2px 7px;
        background-color: transparent;
        color: ${({theme})=> theme.colors.c4};
        font-size: 23px;
        border: solid 1px #fff5;
        border-radius: 7px;
        background-color: #0001;
    }

    @media (min-width: ${({theme})=> theme.breakpoint.miniTablet}) {
        display: none;
    }
`

const CloseButton = ({handleState, children})=>{
    return(
        <BoxButton>
            <button onClick={handleState} >{children}</button>
        </BoxButton>
    )
}

export default CloseButton