import React from 'react'
import './Board.css'
import Heading from '../Heading/Heading';
import LanguageElement from '../LanguageElement/LanguageElement';

export default function Board(props) {
    const {title, languages} = props;
    console.log(languages[0])
  return (
    <div className='boards'>
        <Heading>{title}</Heading>
        <div className='languages'>
            {languages.map((element, index) => (
                <LanguageElement text={element.name} image={element.image} key={index}/>
            ))}
        </div>
    </div>
  )
}
