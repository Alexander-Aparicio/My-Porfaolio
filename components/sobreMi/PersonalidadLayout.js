import { useContext } from "react";
import { DataContext } from "../../context/dataContext";
import CloseButton from "./CloseButton";
import { Container, Text, Title } from "./PersonalidadStyles";

const PersonalidadLayout = ()=>{

    const {data, setData} = useContext(DataContext)

    return(
        <>
        {
            data.layout === 'personalidad' && data.active ===true
            ? (
                <Container>

                    <Title>Personalidad</Title>

                    <Text>
                    De carácter tranquilo 🙂.
                    <br/>Muy curioso y analítico.
                    <br/>Mi fortaleza la perseverancia 💪.
                    <br/>Suelo ser autodidacta.
                    <br/>Doy la impresión de ser muy serio pero soy amigable 😄.
                    </Text>

                    <CloseButton handleState={()=> setData({active:false})}>cerrar</CloseButton>

                </Container>
            ) : null
        }
        </>
    )
}

export default PersonalidadLayout