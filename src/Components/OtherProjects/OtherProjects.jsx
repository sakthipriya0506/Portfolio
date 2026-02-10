import React, { useState } from 'react'
import './OtherProjects.css'
import Text from '../Text/Text.jsx'
import ProjectList from '../ProjectList/ProjectList.jsx'

export default function OtherProjects() {
    const [projects, setprojects] = useState([{category: 'Java Projects', projects: [
        {name: 'Cab Booking System', link: 'https://repository.zohocorpcloud.in/zohocorp/user/Priyazoho-rep_002/Cab_booking_system#/source/default/Cab_booking_system'},
        {name: 'Friend Recommendation System', link : 'https://repository.zohocorpcloud.in/zohocorp/user/Priyazoho-rep_002/Friend-Recomendation-System#/source/default/Friend-Recomendation-System/bin/friendRecommendationSystem'},
        {name: 'Case Coverter System', link: 'https://repository.zohocorpcloud.in/zohocorp/user/Priyazoho-rep_002/Case_Converter#/source/default/Case_Converter'},
        {name: 'ORM Tool', link: 'https://repository.zohocorpcloud.in/zohocorp/user/Priyazoho-rep_002/Simple_ORM#/source/default/Simple_ORM'},
        {name: 'Tic Tac Toe Game', link: 'https://repository.zohocorpcloud.in/zohocorp/user/Priyazoho-rep_002/Tic-Tac-Toe#/blob/default/Tic-Tac-Toe/src/main/TicTacToeGame.java'},
        {name: 'Battle Ship Game', link: 'https://repository.zohocorpcloud.in/zohocorp/user/Priyazoho-rep_002/Battle_Ship_Game#/source/default/Battle_Ship_Game'}
    ]},
    {category: 'JavaScript Projects', projects: [
        {name: 'Neighbouring Countries', link: 'https://repository.zohocorpcloud.in/zohocorp/user/Priyazoho-rep_002/Neighbouring-Countries#/source/default/Neighbouring-Countries'},
        {name: 'Typing Site', link: 'https://priyadarshinis-9ew00nse-8443.zcodecorp.in/Assignment%20006/Typing%20site.html'},
        {name: 'Emotion Recognizer', link: 'https://repository.zohocorpcloud.in/zohocorp/user/Priyazoho-rep_002/Emotion-Recognizer#/source/default/Emotion-Recognizer'},
        {name: 'To do List', link: 'https://repository.zohocorpcloud.in/zohocorp/user/Priyazoho-rep_002/React-To-do-list#/source/default/React-To-do-list'},
        {name: 'Traffic Light', link: 'https://repository.zohocorpcloud.in/zohocorp/user/Priyazoho-rep_002/React-Traffic-Light#/source/default/React-Traffic-Light'}
    ]},
    {category: 'Web Development Projects', projects: [
        {name: 'Media Query', link: 'https://priyadarshinis-5cfah7p2-8443.zcodecorp.in/Assignment%20015/Media%20Query.html'},
        {name: 'Zoho Bookings site', link: 'https://priyadarshinis-5cfah7p2-8443.zcodecorp.in/Zoho%20website/'},
        {name: 'UNO game', link: 'https://repository.zohocorpcloud.in/zohocorp/user/Priyazoho-rep_002/Uno-Game#/source/default/Uno-Game'},
        {name: 'Quiz App', link: 'https://priyadarshinis-9ew00nse-8443.zcodecorp.in/Quiz%20app/Quiz%20app.html'},
        {name: 'Rock Paper Scissor', link: 'https://priyadarshinis-9ew00nse-8443.zcodecorp.in/Rock%20paper/'},
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
