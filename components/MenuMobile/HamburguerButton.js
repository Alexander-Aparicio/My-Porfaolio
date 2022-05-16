import styled from "styled-components";
import Image from "next/image";
import OpenBtn from "../../public/openBtn.png";
import CloseBtn from "../../public/closeBtn.png";

const Hamburger = styled.div`
    width:50px;
    position:fixed;
    bottom:15%;
    right:5%;
    z-index:9999991;
    @media (min-width:${({theme})=> theme.breakpoint.tablet}){
        display:none;
    }
    & img{
        width:100%;
    };
`

const HamburgerButton = ({...props})=>{
    return(
        <Hamburger onClick={props.switch} state={props.state} >

            {props.state 
            ? <Image className="close" src={CloseBtn} layout='intrinsic' /> 
            : <Image className="open" src={OpenBtn} layout='intrinsic' /> }

        </Hamburger>
    )
}

export default HamburgerButton