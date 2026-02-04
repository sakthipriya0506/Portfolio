import React, { useState } from 'react'
import './ProjectsContainer.css'
import Projects from '../Projects/Projects.jsx';

export default function ProjectsContainer() {
    const [projects, setProjects] = useState([
        {name: 'Help center', link: 'www.google.com', languages: [{name: 'HTML'}, {name: 'CSS'}, {name: 'Javascript'}]},
        {name: 'Ticket Management System', link: 'www.google.com', languages: [{name: 'Java'}, {name: 'MySQL'}]},
        {name: 'Data Structure Implementation', link: '', languages: [{name: 'Java'}]}, 
        {name: 'Kanban Board', link: '', languages: [{name: 'React JS'}, {name: 'CSS'},{name: 'Node JS'}, {name: 'MySQL'}]},
        {name: 'UIBuilder', link: '', languages: [{name: 'React JS'}, {name: 'CSS'}, {name: 'Java'}, {name: 'MySQL'}, {name: 'Python'}]},

    ]);
  return (
    <div className='projects-container'>
        {projects.map((project, index) => (
            <Projects title={project.name} link={project.link} languages={project.languages} key={index}/>
        ))}
    </div>
  )
}
