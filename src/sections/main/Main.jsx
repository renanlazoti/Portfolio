import cartoon from '../../assets/cartoon.svg'
import data from './data'
import SocialCard from '../../components/socialCard/SocialCard'
import { 
  MainContainer, 
  MainIntroduction, 
  MainImg, 
  IntroductionSocials, 
  MainButtons, 
  LinkAbout, 
  LinkCv 
} from './Main.style'
import curriculo from '../../assets/CVB-RenanLazoti.pdf'

const Main = () => {
  return (
    <MainContainer id='home'>
      <MainIntroduction>
        <div>
          <h1>Renan Lazoti</h1>
          <h2>Desenvolvedor Full-Stack</h2>
        </div>
        <MainButtons>
          <LinkCv href={curriculo} download>Download CV</LinkCv>
          <LinkAbout href="#about">Sobre mim</LinkAbout>
        </MainButtons>
        <IntroductionSocials>
          {data.map((item) => (
            <SocialCard
              key={item.id}
              icon={item.icon}
              socialLink={item.socialLink}  
            />
          ))}
        </IntroductionSocials>
      </MainIntroduction>
      <MainImg src={cartoon} alt="Cartoon de um boneco mexendo no computador" />
    </MainContainer>
  )
}

export default Main
