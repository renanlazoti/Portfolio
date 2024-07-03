import { Cards } from "./SkillCard.style"

const SkillCard = ({icon: Icon, languageName}) => {
  return (
    <Cards>
        <Icon />
        <p>{languageName}</p>
    </Cards>
  )
}

export default SkillCard
