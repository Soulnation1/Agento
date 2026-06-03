import React from 'react'

const Child = ({name,age,occupation}) => {
  return (
    <div>
        <h1 className='font-semibold'>About Me</h1>
        <h2>my name is {name}</h2>
        <h2>i am {age} years old</h2>
        <h2>i am an {occupation}</h2>
    </div>
  )
}

export default Child