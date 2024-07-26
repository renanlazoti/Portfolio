import { Project, UsedLanguages, ImgLinkProject, GitHubButton } from './ProjectCard.style'
import { FaGithub } from "react-icons/fa"

const ProjectCard = ({imgProject, imgAltText, projectName, projectDescription, projectLanguages, projectRepository}) => {
  return (
    <Project>
        <ImgLinkProject href={projectRepository} target='_blank'><img src={imgProject} alt={imgAltText} /></ImgLinkProject>
        <h3>{projectName}</h3>
        <p>{projectDescription}</p>
        <UsedLanguages>
            {projectLanguages.map((language, index) => (
              <p key={index}>{language}</p>
            ))}
        </UsedLanguages>
        <GitHubButton href={projectRepository} target='_blank'><FaGithub /> GitHub</GitHubButton>
    </Project>
  )
}

export default ProjectCard