import React from 'react'
import Text from '../Text/Text';
import './LanguageElement.css'

export default function LanguageElement(props) {
    const {image, text} = props;
  return (
    <div className='languageElements'>
        {/* <img src={image}/> */}
        <Text>{text}</Text>
    </div>
  )
}
