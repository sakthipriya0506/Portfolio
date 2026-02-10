import React from 'react'
import './Projects.css'
import Text from '../Text/Text';
import LanguageTags from '../languageTags/languageTags';

export default function Projects(props) {
    const {image, title, link, languages, description} = props;
  return (
    <a href={link} target='_blank'>
    <div className='projects'>
        <img src={image} alt='project image'/>
        <Text isHead={true}>{title}</Text>
        <Text>{description}</Text>
        <div className='language-tags-container'>
            {languages.map((element, index) => (
                <LanguageTags size='s' text={element.name} image={element.image} key={index}/>
            ))}
        </div>
    </div>
    </a>
  )
}
