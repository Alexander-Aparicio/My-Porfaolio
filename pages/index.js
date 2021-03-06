import Head from 'next/head'
import PageContainer from '../components/PageContainer'
import MenuMobile from '../components/MenuMobile/Menu'
import HomeContainer from '../components/home/HomeContainer'
import Greeting from '../components/home/Greeting'
import Professional from '../components/home/Professional'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <HomeContainer>

          <Greeting />
          <Professional />

        </HomeContainer>
        <MenuMobile />
      </PageContainer>
    </>
  )
}
