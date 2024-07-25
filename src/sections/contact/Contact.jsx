import SocialCard from '../../components/socialCard/SocialCard'
import {
  ContactContainer, 
  ContactTitle, 
  ContactLinks 
} from './Contact.style'
import data from './data'

const Contact = () => {
  return (
    <ContactContainer id='contact'>
        <ContactTitle>
          <h2>Contate-me</h2>
          <p>Entre em contato comigo através dos links abaixo</p>
        </ContactTitle>
        <ContactLinks>
          {data.map((item) => (
              <SocialCard
                key={item.id}
                icon={item.icon}
                socialLink={item.socialLink}  
              />
          ))}
        </ContactLinks>
    </ContactContainer>
  )
}

export default Contact
