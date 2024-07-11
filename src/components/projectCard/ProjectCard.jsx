import { Project, UsedLanguages } from './ProjectCard.style'
import { FaGithub } from "react-icons/fa"

const ProjectCard = ({imgProject, imgAltText, projectName, projectDescription, projectLanguages, projectRepository}) => {
  return (
    <Project>
        <img src={imgProject} alt={imgAltText} />
        <h3>{projectName}</h3>
        <p>{projectDescription}</p>
        <UsedLanguages>
            {projectLanguages.map((language, index) => (
              <p key={index}>{language}</p>
            ))}
        </UsedLanguages>
        <a href={projectRepository} target='_blank'><FaGithub /> GitHub</a>
    </Project>
  )
}

export default ProjectCard