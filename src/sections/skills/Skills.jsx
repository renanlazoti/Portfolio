import SkillCard from "../../components/skillsCard/SkillCard";
import { SkillsContainer, SkillsGrid } from "./Skills.style";
import data from './data'

const Skills = () => {
  return (
    <SkillsContainer id="skills">
        <h2>Habilidades</h2>
        <SkillsGrid>
            {data.map((item) => (
                <SkillCard 
                  key={item.id}
                  icon={item.icon} 
                  languageName={item.name} 
                />
            ))}
        </SkillsGrid>
    </SkillsContainer>
  )
}

export default Skills
