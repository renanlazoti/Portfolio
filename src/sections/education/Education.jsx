import Formation from "../../components/formationCard/FormationCard"
import { 
  EducationContainer, 
  Formations 
} from "./Education.style"
import data from './data'

const Education = () => {
  return (
    <EducationContainer id="education">
      <h2>Educação</h2>
      <Formations>
          {data.map((item) => (
              <Formation course={item.course} school={item.school} date={item.date} situation={item.situation}/>            
          ))}
      </Formations>
    </EducationContainer>
  )
}

export default Education
