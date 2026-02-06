import React, { useState } from 'react'
import './ProjectsContainer.css'
import Projects from '../Projects/Projects.jsx';

export default function ProjectsContainer() {
    const [projects, setProjects] = useState([
        {name: 'Help center', link: 'www.google.com', languages: [{name: 'HTML'}, {name: 'CSS'}, {name: 'Javascript'}], description: 'A replica of the help center provided by Zoho Desk inluding ticket listing.'},
        {name: 'Ticket Management System', link: 'www.google.com', languages: [{name: 'Java'}, {name: 'MySQL'}], description: 'A console project which focusses on ticket raising, assigning and resolving. It involves three roles : Manager, Agent and User.'},
        {name: 'Data Structure Implementation', link: '', languages: [{name: 'Java'}]}, 
        {name: 'Kanban Board', link: '', languages: [{name: 'React JS'}, {name: 'CSS'},{name: 'Node JS'}, {name: 'MySQL'}], description: 'A task management system which displays the tasks in Kanaban view and enables a person to categorize the tasks.'},
        {name: 'UIBuilder', link: '', languages: [{name: 'React JS'}, {name: 'CSS'}, {name: 'Java'}, {name: 'MySQL'}, {name: 'Python'}], description: 'A project which formats the code in accordance to the rules provided by the user.'},

    ]);
  return (
    <div className='projects-container'>
        {projects.map((project, index) => (
            <Projects title={project.name} link={project.link} languages={project.languages} key={index} description={project.description}/>
        ))}
    </div>
  )
}
