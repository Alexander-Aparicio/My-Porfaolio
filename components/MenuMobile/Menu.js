import { useRouter } from "next/router";
import styled from "styled-components"
import {useState} from "react"
import Link from "next/link";
import HamburgerButton from "./HamburguerButton";

const MenuTitle = styled.h2`
font-size: 2.5rem;
letter-spacing: 1px;
font-weight: lighter;
z-index: 99;
color:${({theme})=> theme.colors.c2 }; 
font-family: ${({theme})=> theme.fonts.primary};
margin: 0;
`

const UiMenu = styled.section`
    display: ${ props => props.visible ? 'grid' : 'none'};
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background-color:${({theme})=> theme.colors.backgroundMobile }; 
    z-index:9999;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    padding: 10% 5%;
    align-items: center;
    justify-items: center;
    align-content: center;
`
const Enlace = styled.p`
    text-align:center;
    margin: 0;

    & a {
        color: ${(props)=> props.active ? ({theme})=>theme.colors.c3 : ({theme})=>theme.colors.c1 };
        font-size:2.5rem;
        font-family: 'Poppins', sans-serif;
        margin: 0;
        border-bottom: solid 1px transparent;
        text-decoration: none;
        font-family: ${({theme})=> theme.fonts.secundary};
    }
`

const MenuMobile = ()=>{

    const page = useRouter().asPath

    const [openMenu, setOpenMenu] = useState(false)

    const handleMenu = ()=>{

        setOpenMenu(!openMenu)
    }

    return(
        <div>

            <HamburgerButton switch={ handleMenu } state={openMenu} />

            <UiMenu visible={openMenu}>
                
                <MenuTitle color={"#fbc330"}>Menú</MenuTitle>

                <Enlace onClick={ handleMenu } 
                active={page === '/' ? true :false}>
                    <Link 
                    href={"/"} 
                    >
                    <a>Inicio</a>    
                    </Link>
                </Enlace>

                <Enlace onClick={ handleMenu } 
                active={page === '/proyectos' ? true :false}>
                    <Link 
                    href={"/proyectos"}
                    >
                    <a >Proyectos</a>    
                    </Link>
                </Enlace>

                <Enlace onClick={ handleMenu } 
                active={page === '/tecnologias' ? true :false}>
                    <Link 
                    href={"/tecnologias"}
                    >
                    <a>Tecnologías</a>    
                    </Link>
                </Enlace>

                <Enlace onClick={ handleMenu } 
                active={page === '/sobremi' ? true :false}>
                    <Link 
                    href={"/sobremi"}
                    >
                    <a>Sobre Mi</a>    
                    </Link>
                </Enlace>

            </UiMenu>

        </div>

    )
}

export  default MenuMobile