import React, { useState } from 'react'
import './OtherProjects.css'
import Text from '../Text/Text.jsx'
import ProjectList from '../ProjectList/ProjectList.jsx'

export default function OtherProjects() {
    const [projects, setprojects] = useState([{category: 'Java Projects', projects: [
        {name: 'ORM Tool', link: 'www.google.com'},
        {name: 'Cab Booking System', link: 'www.google.com'}
    ]},
    {category: 'Javascript Projects', projects: [
        {name: 'UNO game', link: 'www.google.com'},
        {name: 'Quiz App', link: 'www.google.com'}
    ]},
    {category: 'Web Development Projects', projects: [
        {name: 'Animation', link: 'www.google.com'},
        {name: 'Zoho Bookings site', link: 'www.google.com'}
    ]}])
  return (
    <div className='other-projects'>
        <ul className='project-list-container'>
            {projects.map((projectList, index) => (
            <ProjectList projectCategory={projectList.category} key={index} projects={projectList.projects}/>
        ))}
        </ul>
    </div>
  )
}
