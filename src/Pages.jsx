import React from 'react'
import NavBar from './navbar/NavBar'
import SlideOne from './slides/SlideOne'
import SlideTwo from './slides/SlideTwo'

const Pages = () => {
  return (
    <div className='bg-[#eaf4ee] w-full '>
        <NavBar/>
        <SlideOne/>
        <SlideTwo/>
     
    </div>
  )
}

export default Pages