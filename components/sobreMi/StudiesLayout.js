import { useContext } from "react";
import { DataContext } from "../../context/dataContext";
import CloseButton from "./CloseButton";
import { Container, Lista, Title } from "./StudiesStyles";

const StudiesLayout = ()=>{

    const { data, setData } = useContext(DataContext)

    return(
        <>
        {
            data.layout === 'estudios' && data.active ===true
            ? (
                <Container>
                    <Title>Formación</Title>
                    <Lista>
                        <li>👨‍🎓 Bachiller en Economía<br/><span>UNALM</span></li>
                        <li>📕 Marketing Digital<br/><span>IPM</span></li>
                        <li>💻 Desarrollo Web<br/><span>UDEMY (Cursos)</span></li>
                    </Lista>
           
                    <CloseButton handleState={()=> setData({active:false})}>cerrar</CloseButton>
                   
                </Container>
            ) : null
        }
        </>
    )
}

export default StudiesLayout