import React from 'react'

export default function Text(props) {
    const { children, isHead } = props
  return (
    <p className={'text' + (isHead ? ' head': '')}>{children}</p>
  )
}
