import React from 'react'
import './LandingPage.css'
import ProfileImage from '../ProfileImage/ProfileImage.jsx'
import Heading from '../Heading/Heading.jsx'
import Text from '../Text/Text.jsx'

export default function LandingPage() {
  return (
    <div className='landing-page'>
        <div className='about-me'>
          <Heading>Hello, I'm Priya</Heading>
          <Heading>Fullstack Developer</Heading>
          <Text>I am a full stack development student with a strong focus on problem solving and logical thinking. I enjoy working on projects where I can analyze requirements, design clear solutions, and turn ideas into functional applications. I value clean code, consistency, and understanding how different parts of a system work together. I am continuously learning and improving my skills with the goal of building reliable, well-structured software.</Text>
        </div>
        <ProfileImage/>
    </div>
  )
}
