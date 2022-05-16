import styled from "styled-components";
import cornerLeftO from "../../public/cornerLeftO.png";
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router";

const Navegation = styled.header`
    grid-area: header;
    box-sizing: border-box;
    background-color: transparent;
    display: flex;
    display: -webkit-box;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: start;
    position: relative;
    height: auto;
`
const Card = styled.div`
    max-width: 65px;
    max-height: 65px;
    z-index: 99;
    margin-right: 20px;
    padding-top: 3vh;
    visibility: hidden;
    
    @media (min-width: ${({theme})=> theme.breakpoint.mobile}){
        max-width: 55px;
        max-height: 55px;
    };
    @media (min-width: ${({theme})=> theme.breakpoint.miniTablet}){
  
    };
    @media (min-width: ${({theme})=> theme.breakpoint.tablet}){
        max-width: 80px;
        max-height: 80px;
    }
`
const Links = styled.nav`
    display: none;
    font-family: ${({theme})=>theme.fonts.primary};
    font-weight: lighter;
    padding-top: 5vh;

    @media (min-width: ${({theme})=> theme.breakpoint.miniTablet}){
        display: block;
    }
`
const Op = styled.a`
    font-family: ${({theme})=>theme.fonts.primary};
    font-weight: lighter;
    font-size: 25px;
    text-decoration: none;
    margin: 0 16px;
    cursor: pointer;
    border-bottom: solid 1px transparent;
    transition: border-bottom 0.5s linear;
    color: ${(props)=> props.active ? ({theme})=>theme.colors.c2 : ({theme})=>theme.colors.c1 };
    :hover {
        border-bottom: solid 1px ${({theme})=>theme.colors.c2};
    }

    @media (min-width: ${({theme})=> theme.breakpoint.tablet}){
        font-size: 30px;
    }

    @media (min-width: ${({theme})=> theme.breakpoint.laptop}){
        font-size: 33px;
    }
`
const CornerLeftSup = styled.div`
    max-width: 180px;
`

const Header = ()=>{

    const page = useRouter().asPath

    return(
        <Navegation>

            <CornerLeftSup>
                <Image src={cornerLeftO} layout='intrinsic' alt="pieza decorartiva" />
            </CornerLeftSup>

            <Links>
                <Link href={'/'} >
                    <Op active={page==='/'? true:false}>Inicio</Op> 
                    </Link>
                <Link href={'/proyectos'} >
                    <Op active={page==='/proyectos'? true:false}>Proyectos</Op> 
                    </Link>
                <Link href={'/tecnologias'} >
                    <Op active={page==='/tecnologias'? true:false}>Tecnologías</Op> 
                    </Link>
                <Link href={'/sobremi'}>
                    <Op active={page==='/sobremi'? true:false} >Sobre Mi</Op> 
                    </Link>
            </Links>

            <Card onClick={()=>console.log('darkColor')}>
            </Card>

        </Navegation>
    )
}

export default Header