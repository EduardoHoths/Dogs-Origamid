import React from 'react'
import {Div} from './Style'
import useFetch from '../../../Hooks/useFetch'
import { PHOTO_GET } from '../../../api'
import Error from '../../Helper/Error'
import Loading from '../../Helper/Loading/Loading'
import PhotoContent from '../../PhotoComponents/PhotoContent/PhotoContent'

const FeedModal = ({photo, setModalPhoto}) => {
  const {data, error, loading, request} = useFetch()
  
  function handleOutsideClick({target, currentTarget}) {
    if(target === currentTarget) {
      setModalPhoto(null)
    }
  }

  React.useEffect(async () => {
    const {url, options} = PHOTO_GET(photo.id)
    const {response, json} = await request(url, options)
  },[])

  return (
    <Div onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data}/>}
    </Div>
  )
}

export default FeedModal