import cartoon from '../../assets/cartoon.svg'
import data from './data'
import SocialCard from '../../components/socialCard/SocialCard'
import { 
  MainContainer, 
  MainIntroduction, 
  MainImg, 
  IntroductionTitle, 
  IntroductionSubtitle, 
  IntroductionSocials, 
  MainButtons, 
  LinkAbout, 
  LinkCv 
} from './Main.style'
import curriculo from '../../assets/curriculo.pdf'

const Main = () => {
  return (
    <MainContainer id='home'>
      <MainIntroduction>
        <div>
          <IntroductionTitle>Renan Lazoti</IntroductionTitle>
          <IntroductionSubtitle>Desenvolvedor Full-Stack</IntroductionSubtitle>
        </div>
        <MainButtons>
          <LinkCv href={curriculo} download>Download CV</LinkCv>
          <LinkAbout href="#about">Sobre mim</LinkAbout>
        </MainButtons>
        <IntroductionSocials>
          {data.map((item) => (
            <SocialCard
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
