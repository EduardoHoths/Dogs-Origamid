import React from 'react'
import {FooterStyle} from './Style'
import {ReactComponent as Dogs} from '../../Assets/dogs-footer.svg'

const Footer = () => {
  return (
    <FooterStyle>
      <Dogs/>
      <p>Dogs. Alguns direitos reservados.</p>
    </FooterStyle>
  )
}

export default Footer