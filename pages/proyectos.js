import Head from 'next/head'
import MenuMobile from '../components/MenuMobile/Menu'
import PageContainer from "../components/PageContainer"
import ProjectContainer from '../components/proyectos/ProjectContainer'
import Projects from '../components/proyectos/Projects'
import TitleProject from '../components/proyectos/TitleProject'

const proyectos = ()=>{
    return(
        <>
            <Head>
                <title>Mis proyectos</title>
                <meta name="description" content="Generated by create next app" />
            </Head>

            <PageContainer>
                <ProjectContainer>

                    <TitleProject />
                    <Projects />

                </ProjectContainer>
                <MenuMobile />
            </PageContainer>
        </>
    )
}

export default proyectos