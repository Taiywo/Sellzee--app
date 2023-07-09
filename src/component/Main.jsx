import React from 'react'
import Partners from '../component/Partners'
import Hero from "../component/Hero"
import Rating from './Rating'
import { Pricing } from './Pricing'


function Main() {
  return (
    <div className=' bg-white'>
      <Partners />
      <Hero />
      <Rating/>
      <Pricing/>
      
      </div>
  )
}

export default Main