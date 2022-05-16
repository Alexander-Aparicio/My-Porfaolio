import { useContext } from "react";
import { DataContext } from "../../context/dataContext";
import { ButtonSobreMi, MenuContainer } from "./MenuStyles";

const MenuSobreMi = ()=>{

    const {data, changeState} = useContext(DataContext)

    return(
        <MenuContainer>
            <ButtonSobreMi active={data.layout === 'estudios' ? true :false} onClick={ ()=> changeState('estudios') } >Estudios</ButtonSobreMi>
            <ButtonSobreMi active={data.layout === 'personalidad' ? true :false} onClick={ ()=> changeState('personalidad') } >Personalidad</ButtonSobreMi>
            <ButtonSobreMi active={data.layout === 'hobbies' ? true :false} onClick={ ()=> changeState('hobbies') } >Hobbies</ButtonSobreMi>
            <ButtonSobreMi active={data.layout === 'ambiciones' ? true :false} onClick={ ()=> changeState('ambiciones') } >Ambiciones</ButtonSobreMi>
        </MenuContainer>
    )
}

export default MenuSobreMi