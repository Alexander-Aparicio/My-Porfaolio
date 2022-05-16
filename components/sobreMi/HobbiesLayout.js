import { useContext } from "react"
import { DataContext } from "../../context/dataContext"
import CloseButton from "./CloseButton"
import { Container, Title, Hobbies } from "./HobbiesStyles"

const HobbiesLayout = ()=> {

    const {data, setData} = useContext(DataContext)

    return(
        <>    
        {
            data.layout === 'hobbies' && data.active ===true
            ? (
                <Container>
                    <Title>Hobbies</Title>
                    <Hobbies>
                    <li>Practicar Tenis de mesa 🏓.</li>
                    <li>Ver videos de programación en You Tube 📺.</li>
                    <li>Ver documentales sobre ciencias naturales 🔭.</li>
                    <li>Escuchar podcast de SEO y marketing 🏷️.</li>
                    <li>Jugar League of Legends con amigos 🕹️.</li>
                    </Hobbies>

                    <CloseButton handleState={()=> setData({active:false})}>cerrar</CloseButton>
                </Container>
            ) : null 
        }
        </>
    )
}

export default HobbiesLayout