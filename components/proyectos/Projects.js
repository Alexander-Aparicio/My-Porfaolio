import Container from "./ProjectsComponents/Container";
import WebsiteProject from "./ProjectsComponents/WebsiteProject";

const Projects = ()=>{
    return(
        <Container>

            <WebsiteProject  
                link={''}
                web={'Mi portafolio'}
                tech={'Next JS - Styled-Components'}
                repo={'https://github.com/Alexander-Aparicio/Portafolio-NextJS'}
            />

            <WebsiteProject  
                link={'https://spaweb-75003.firebaseapp.com/'}
                web={'Aplicación Web de registros'}
                tech={'JS - Firebase'}
                repo={'https://github.com/Alexander-Aparicio/SPA-JS-Firebase'}
                color={'#FFCA28'}
            />

            <WebsiteProject  
                link={'https://tenisdemesarevolution.com/'}
                web={'Web minimalista deportivo.'}
                tech={'React - Styled-Components'}
                repo={'https://github.com/Alexander-Aparicio/Web-Simple-React'}
            />

            <WebsiteProject  
                link={'https://lustrous-twilight-0b7d98.netlify.app/'}
                web={'Buscador de películas'}
                tech={'React - Tailwind CSS'}
                repo={'https://github.com/Alexander-Aparicio/infopeliculas'}
            />

            <WebsiteProject  
                link={'https://rokeweb-peru.com/'}
                web={'Web de servicio - Multi theme'}
                tech={'JS - Firebase'}
                repo={'https://github.com/Alexander-Aparicio/Web-Simple-React'}
                color={'#FFCA28'}
            />

            <WebsiteProject  
                link={'https://revolutiondancestudioperu.com/'}
                web={'Web minimalista de baile.'}
                tech={'Next JS - Styled-Components'}
                repo={'https://github.com/Alexander-Aparicio/SIMPLE-WEB-PAGE'}
            />

        </Container>
    )
}

export default Projects