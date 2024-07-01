import { ButtonContainer } from './Button.style'

const Button = ({children}) => {
  return (
    <ButtonContainer>
        {children}
    </ButtonContainer>
  )
}

export default Button