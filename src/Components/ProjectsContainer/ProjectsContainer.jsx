import React, { useState } from 'react'
import './ProjectsContainer.css'
import Projects from '../Projects/Projects.jsx';

export default function ProjectsContainer() {
    const [projects, setProjects] = useState([
        {name: 'Help center', image: '/helpDesk.jpg',link: 'https://priyadarshinis-9ew00nse-8443.zcodecorp.in/JS%20Project/', languages: [{name: 'HTML'}, {name: 'CSS'}, {name: 'Javascript'}], description: 'A replica of the help center provided by Zoho Desk inluding ticket listing.'},
        {name: 'Ticket Management System', image: '/ticketManagement.jpg', link: 'https://repository.zohocorpcloud.in/zohocorp/user/Priyazoho-rep_002/Ticket_Management_DB#/source/default/Ticket_Management_DB', languages: [{name: 'Java'}, {name: 'MySQL'}], description: 'A console project which focusses on ticket raising, assigning and resolving. It involves three roles : Manager, Agent and User.'},
        {name: 'Data Structure Implementation',image: '/dataStructure.jpeg', link: 'https://repository.zohocorpcloud.in/zohocorp/user/Priyazoho-rep_002/Data_Structure_Implementation_Project#/source/default/Data_Structure_Implementation_Project', languages: [{name: 'Java'}], description: 'An Implementation of Array Deque and Doubly Linked List in Java.'}, 
        {name: 'Kanban Board',image:'/kanban.svg', link: 'https://repository.zohocorpcloud.in/zohocorp/user/Priyazoho-rep_002/Kanban_Board#/source/default/Kanban_Board', languages: [{name: 'React JS'}, {name: 'CSS'},{name: 'Node JS'}, {name: 'MySQL'}], description: 'A task management system which displays the tasks in Kanaban view and enables a person to categorize the tasks.'},
        {name: 'MurAI',image: '/codeLinter.png',link: 'https://github.com/Thanos1025/Code_Translator_Frontend/tree/PriyaBranch/public', languages: [{name: 'React JS'}, {name: 'CSS'}, {name: 'Java'}, {name: 'MySQL'}, {name: 'Python'}], description: 'A project which formats the code in accordance to the rules provided by the user.'},

    ]);
  return (
    <div className='projects-container'>
        {projects.map((project, index) => (
            <Projects title={project.name} link={project.link} languages={project.languages} key={index} description={project.description} image={project.image}/>
        ))}
    </div>
  )
}
