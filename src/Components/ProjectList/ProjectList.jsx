import React from 'react'
import './ProjectList.css'
import Text from '../Text/Text';

export default function ProjectList(props) {
    const {projects, projectCategory} = props;
  return (
    <li className='projectsList'>
        <Text>{projectCategory}</Text>
        <ul>
            {projects.map((project, index) => (
                <li key={index} className='project-link'>
                    <a href={project.link}>{project.name}</a>
                </li>
            ))}
        </ul>
    </li>
  )
}
