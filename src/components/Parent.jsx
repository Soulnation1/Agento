import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
        <Child name="Soultech" age={25} occupation="Developer"/>
    </div>
  )
}

export default Parent