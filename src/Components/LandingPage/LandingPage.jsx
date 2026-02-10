import React from 'react'
import './LandingPage.css'
import ProfileImage from '../ProfileImage/ProfileImage.jsx'
import Heading from '../Heading/Heading.jsx'
import Text from '../Text/Text.jsx'

export default function LandingPage() {
  return (
    <div className='landing-page'>
        <div className='about-me'>
          <Heading>Hello, I'm <span className='name'>Priya Darshini</span></Heading>
          <Heading>Fullstack Developer</Heading>
          <Text>I am a full stack development student with a strong focus on <span className='highlight'>problem solving</span> and <span className='highlight'>logical thinking.</span>  I value clean code, consistency, and understanding how different parts of a system work together, and I continue improving my skills by <i>building and refining projects.</i></Text>
        </div>
        <ProfileImage/>
    </div>
  )
}
