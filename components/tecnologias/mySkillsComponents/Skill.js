import { useState, useEffect } from "react";
import contador from "../../../helpers/contador";
import { Bar, Container, Level, Name, Text } from "./StyledSkill";

const Skill = ({children,...props})=>{

    const [ skill , setSkill ] = useState(0)

    const finalValue = props.level*0.1

    useEffect(()=> {
        contador(skill, finalValue, 1,setSkill)
    },[skill])

    return(
        <Container>
            <Bar>
                <Level level={props.level} color={props.color}>
                    <Text>{skill}0%</Text>
                </Level>
            </Bar>
            <Name color={props.color}>{children}</Name>
        </Container>
    )
}

export default Skill