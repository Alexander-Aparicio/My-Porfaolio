import ContainerSkills from "./mySkillsComponents/ContainerSkills";
import Skill from "./mySkillsComponents/Skill";

const MySkills = ()=>{
    return(
        <ContainerSkills>
            <Skill color={'#01E4F2'} level={75} >React JS</Skill>
            <Skill color={'#FFF'} level={65} >Next JS</Skill>
            <Skill color={'#FFF500'} level={50} >Firebase</Skill>
            <Skill color={'#1668F8'} level={50} >Tailwind</Skill>
            <Skill color={'#EA68F8'} level={75} >Styled-components</Skill>
            <Skill color={'#2285EC'} level={70} >TypeScript</Skill>
            <Skill color={'#bf4080'} level={60} >Sass</Skill>
            <Skill color={'#480'} level={60} >Node JS</Skill>
            <Skill color={'#42b883'} level={30} >Vue JS</Skill>
       
        </ContainerSkills>
    )
}

export default MySkills