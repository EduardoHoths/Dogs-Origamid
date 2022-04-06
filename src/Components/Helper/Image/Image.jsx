import React from 'react'
import {Wrapper, Skeleton} from './Style'

const Image = ({alt, ...props}) => {
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad({target}){
    target.style.opacity = 1;
  }

  return (
    <Wrapper>
      {skeleton && <Skeleton />}
      <img onLoad={handleLoad} alt={alt} {...props} />
    </Wrapper>
  )
}

export default Image