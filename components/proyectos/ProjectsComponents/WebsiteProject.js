import Image from "next/image";
import Github from "../../../public/logos/github.svg";
import { Card, Project, Repository, Technology, Web } from "./WebsiteProjectStyles";

const WebsiteProject = ({...props})=>{
    return(
        <Repository>

            <Project href={props.link} target='_blank' rel="noreferrer">
                <Web>{props.web}</Web>
                <Technology color={props.color}><span>/</span>{props.tech}</Technology>
            </Project>

            <Card>
                <a href={props.repo} target='_blank' rel="noreferrer">
                    <Image src={Github} layout='intrinsic' alt="logo github"/>
                </a>
            </Card>

        </Repository>
    )
}

export default WebsiteProject