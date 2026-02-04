import React from 'react'
import './Projects.css'
import Text from '../Text/Text';
import LanguageElement from '../LanguageElement/LanguageElement';

export default function Projects(props) {
    const {title, link, languages} = props;
  return (
    <a href={link}>
    <div className='projects'>
        <img src='/h.png' alt='project image'/>
        <Text>{title}</Text>
        <div className='languages'>
            {languages.map((element, index) => (
                <LanguageElement size='s' text={element.name} image={element.image} key={index}/>
            ))}
        </div>
    </div>
    </a>
  )
}
