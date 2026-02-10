import React from 'react'
import './ProfileImage.css'

export default function ProfileImage(props) {
  const { src, alt } = props
  return (
    <img className='profile-image' src='/me.png'/>
  )
}

