import { ExperienceCard } from "./aboutCard.style"

const aboutCard = ({icon: Icon, title, description }) => {
  return (
    <ExperienceCard>
        <Icon />
        <h4>{title}</h4>
        <p>{description}</p>
    </ExperienceCard>
  )
}

export default aboutCard
