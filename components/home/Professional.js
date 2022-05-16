import Card from "./professionalComponents/Card";
import Container from "./professionalComponents/Container";
import SocialMedia from "./professionalComponents/SocialMedia";
import Welcome from "./professionalComponents/Welcome";
import Alexander from "../../public/Alexander Meza.png";
import Github from "../../public/logos/github.svg";
import Twitter from "../../public/logos/twitter.svg";
import Facebook from "../../public/logos/facebook.svg";
import WhatsApp from "../../public/logos/whatsapp.svg";

const Professional = ()=>{
    return(
        <Container>
            <Card img={Alexander}/>
            <Welcome>¡Bienvenido!</Welcome>
            <SocialMedia 
                redesSociales={[
                    {name:'github', img: Github},
                    {name:'twitter', img: Twitter},
                    {name:'facebook', img: Facebook},
                    {name:'whatsApp', img: WhatsApp},
                ]}
            />
        </Container>
    )
}

export default Professional