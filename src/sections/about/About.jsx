import personalPhoto from '../../assets/personalPhoto.jpeg'
import { AboutContainer, AboutInformations, AboutImage, AboutCards } from './About.style';
import ExperienceCard from '../../components/aboutCard/aboutCard'
import data from './data'

const About = () => {
  return (
    <AboutContainer id='about'>      
        <AboutImage src={personalPhoto} alt="" />
        <AboutInformations>
          <h2>Sobre mim</h2>
          <AboutCards>
            {data.map((item) => (
                <ExperienceCard icon={item.icon} title={item.title} description={item.description} />
            ))}
          </AboutCards>
          <p>
            Olá! Sou o Renan, técnico em informática e graduando em Análise e Desenvolvimento de Sistemas na USJT, apaixonado por utilizar meus conhecimentos para ajudar as pessoas através de melhorias em seus sistemas e no seu gerenciamento.
          </p>
          <p>
            Através do curso Análise e Desenvolvimento de Sistemas pude me aprofundar em algumas linguagens de programação, banco de dados e praticar desenvolvimento de aplicações com base em problemas globais, e também soluções para problemas cotidianos de empresas. Estou atualmente seguindo o meu aprendizado em bancos de dados e linguagens de programação como ReactJS, React Native, NodeJS e Java script.
          </p>
          <p>
            Um dos aspectos que me destaca é minha facilidade de aprendizado. Recebo feedbacks consistentemente positivos por minha capacidade de trabalho em equipe e avançar em projetos que estavam em impasse. Estou comprometido em continuar crescendo e contribuindo de forma significativa onde quer que eu esteja.
          </p>
        </AboutInformations>
    </AboutContainer>
  )
}

export default About;