import React from 'react'
import './languageTags.css'
import Text from '../Text/Text'

export default function LanguageTags(props) {
    const {text} = props;
  return (
    <div className='language-tags'>
        <Text>{text}</Text>
    </div>
  )
}
