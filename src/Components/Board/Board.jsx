import React from 'react'
import './Board.css'
import LanguageElement from '../LanguageElement/LanguageElement';
import Text from '../Text/Text';

export default function Board(props) {
    const {title, languages} = props;
    console.log(languages[0])
  return (
    <div className='boards'>
        <Text isHead={true}>{title}</Text>
        <div className='languages'>
            {languages.map((element, index) => (
                <LanguageElement text={element.name} image={element.image} key={index}/>
            ))}
        </div>
    </div>
  )
}
