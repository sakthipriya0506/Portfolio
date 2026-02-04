import React from 'react'
import Text from '../Text/Text.jsx'
import './LandingPage.css'
import ProfileImage from '../ProfileImage/ProfileImage.jsx'
import Heading from '../Heading/Heading.jsx'

export default function LandingPage() {
  return (
    <div className='landing-page'>
        <div>
          <Heading>Hello, I'm Priya</Heading>
          <Heading>Fullstack Developer</Heading>
        </div>
        <ProfileImage/>
    </div>
  )
}
