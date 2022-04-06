import React from 'react'
import UserHeaderNav from '../UserHeaderNav/UserHeaderNav'
import {Header} from './Styles'
import {useLocation} from 'react-router-dom'

const UserHeader = () => {
  const [title, setTitle] = React.useState('')
  const location = useLocation()

  React.useEffect(() => {
    switch(location.pathname){
      case '/conta':
        setTitle('Minha Conta')
        break
      case '/conta/stats':
        setTitle('Estatísticas')
        break
      case '/conta/post':
        setTitle('Poste sua foto')
        break

      default:
        setTitle('Minha Conta')
    }
  }, [location])

  return (
    <Header>
        <h1 className='title'>{title}</h1>
        <UserHeaderNav/>
    </Header>
  )
}

export default UserHeader