import cartoon from '../../assets/cartoon.svg'
import data from './data'
import SocialCard from '../../components/socialCard/SocialCard'
import { MainContainer, MainIntroduction, MainImg, IntroductionTitle, IntroductionSubtitle, IntroductionSocials } from './Main.style'
import ButtonContainer from '../../components/button/Button'

const Main = () => {
  return (
    <MainContainer>
      <MainIntroduction>
        <div>
          <IntroductionTitle>Renan Lazoti</IntroductionTitle>
          <IntroductionSubtitle>Desenvolvedor Full-Stack</IntroductionSubtitle>
        </div>
        <ButtonContainer>Download CV</ButtonContainer>
        <IntroductionSocials>
          {data.map((icon) => (
            <SocialCard icon={icon.icon} />
          ))}
        </IntroductionSocials>
      </MainIntroduction>
      <MainImg src={cartoon} alt="Cartoon de um boneco mexendo no computador" />
    </MainContainer>
  )
}

export default Main
