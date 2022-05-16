import Head from 'next/head'
import MenuMobile from '../components/MenuMobile/Menu'
import PageContainer from "../components/PageContainer"
import MySkills from '../components/tecnologias/MySkills'
import TechContainer from "../components/tecnologias/TecnologiasContainer"
import TitleTech from '../components/tecnologias/TitleTech'

const tecnologias = ()=>{
    return(
        <>
            <Head>
                <title>Tecnologías</title>
                <meta name="description" content="Generated by create next app" />
            </Head>

            <PageContainer>
                <TechContainer >

                    <TitleTech />
                    <MySkills />

                </TechContainer>
                <MenuMobile />
            </PageContainer>
        </>
    )
}

export default tecnologias