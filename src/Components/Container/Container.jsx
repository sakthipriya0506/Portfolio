import React from 'react'
import Heading from '../Heading/Heading'
import './Container.css'

export default function Container(props) {
    const { children, title } = props
  return (
    <div className='container'>
      {title && <Heading>{title}</Heading>}
    <div>
        
        {children}
    </div>
    </div>
  )
}
