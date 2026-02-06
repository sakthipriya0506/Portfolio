import React from 'react'
import './Heading.css'

export default function Heading(props) {
    const { children } = props
  return (
    <h1 className='heading'>{children}</h1>
  )
}
