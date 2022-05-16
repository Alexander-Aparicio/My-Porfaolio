import { useContext } from "react";
import { DataContext } from "../../context/dataContext";
import robotjs from "../../public/robotjs.svg"
import Image from "next/image";
import { BoxImg, Container } from "./botJsStyles";

const BotJs = ()=>{

    const {data} = useContext(DataContext)

    return(
        <>
        {
            data.active === false
            ? (
                <Container>
                    <BoxImg>
                        <Image src={robotjs} layout='intrinsic' alt="img decorativa" />          
                    </BoxImg>
                </Container>
            ) : null
        }
        </>
    )
}

export default BotJs