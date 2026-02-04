import React, { useState } from 'react'
import './BackgroundElements.css'

export default function BackgroundElements() {
    const [BGElementsProperties, setbgElementsDuration] = useState([0,1,2,3,4,5,6,7])
  return (
    <div className='background-elements-container'>
        {BGElementsProperties.map((element, index) => (
            <span className='background-element' key={index}></span>
        ))}
    </div>
  )
}
