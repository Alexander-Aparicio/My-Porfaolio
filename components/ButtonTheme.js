import Image from "next/image"
import styled from "styled-components"
import Sol from "../public/sol.png"
import Luna from "../public/luna.png"
import themeDark from "../themes/dark"

const Button = styled.button`
    position: fixed;
    top:5%;
    right: 5%;
    z-index: 101;
    max-width: 70px;
    background-color: transparent;
    cursor: pointer;
    border-style: none;
    color: #FF9F0F;
    font-family: ${({theme})=> theme.fonts.primary};
    -webkit-tap-highlight-color: rgba(0,0,0,0);
` 

const ButtonTheme = ({children, estado, changeTheme})=>{

    return(
        <Button onClick={()=> changeTheme()}>
            {
                estado ===themeDark ? (<Image src={Sol} width={70} height={70} alt={'button theme light'} />) : <Image src={Luna} width={70} height={70} alt={'button de theme dark'} />
            }
            {children}
        </Button>
    )

}

export default ButtonTheme