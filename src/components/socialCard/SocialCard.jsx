import { CardContainer } from "./SocialCard.style";

const SocialCard = ({ icon: Icon, socialLink}) => {
  return (
    <CardContainer href={socialLink} target="_blank">
        <Icon />
    </CardContainer>
  )
}

export default SocialCard
