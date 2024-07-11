import ProjectCard from '../../components/projectCard/ProjectCard';
import { ProjectsContainer, ProjectsContent, ProjectsLinks } from './Projects.style'
import data from './data'

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
        <ProjectsContent>
            <h2>Projetos</h2>
            <ProjectsLinks>
                {data.map((item) => (
                    <ProjectCard 
                        imgProject={item.imgProject}
                        imgAltText={item.imgAltText}
                        projectName={item.projectName}
                        projectDescription={item.projectDescription}
                        projectLanguages={item.projectLanguages}
                        projectRepository={item.projectRepository}
                    />
                ))}
            </ProjectsLinks>
        </ProjectsContent>
    </ProjectsContainer>
  )
}

export default Projects
