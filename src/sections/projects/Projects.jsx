import ProjectCard from '../../components/projectCard/ProjectCard';
import { 
    ProjectsContainer, 
    ProjectsContent, 
    ProjectsLinks,
    GithubLink
} from './Projects.style'
import data from './data'

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
        <ProjectsContent>
            <h2>Projetos</h2>
            <p>Confira alguns dos projetos pessoais e educacionais que desenvolvi até agora. Para mais detalhes, visite meu <GithubLink href="https://github.com/renanlazoti?tab=repositories" target='_blank'>GitHub</GithubLink>.</p>
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
