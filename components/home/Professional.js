import Card from "./professionalComponents/Card";
import Container from "./professionalComponents/Container";
import SocialMedia from "./professionalComponents/SocialMedia";
import Welcome from "./professionalComponents/Welcome";
import Alexander from "../../public/Alexander Meza.png";
import Github from "../../public/logos/github.svg";
import Twitter from "../../public/logos/twitter.svg";
import Facebook from "../../public/logos/facebook.svg";
import WhatsApp from "../../public/logos/whatsapp.svg";

const Professional = () => {
  return (
    <Container>
      <Card img={Alexander} />
      <Welcome>¡Bienvenido!</Welcome>
      <SocialMedia
        redesSociales={[
          {
            name: "github",
            img: Github,
            link: "https://github.com/Alexander-Aparicio",
          },
          {
            name: "twitter",
            img: Twitter,
            link: "https://twitter.com/Alexand66745116",
          },
          {
            name: "facebook",
            img: Facebook,
            link: "https://www.facebook.com/alexander14mr2015/",
          },
          {
            name: "whatsApp",
            img: WhatsApp,
            link: `https://api.whatsapp.com/send?phone=51924998093&text=Hola%20Alexander%20😃`,
          },
        ]}
      />
    </Container>
  );
};

export default Professional;
