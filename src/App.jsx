import React, { useEffect, useRef, useState } from 'react'
import LandingPage from './Components/LandingPage/LandingPage.jsx'
import Container from './Components/Container/Container.jsx'
import Skills from './Components/Skills/Skills.jsx'
import ProjectsContainer from './Components/ProjectsContainer/ProjectsContainer.jsx'
import './App.css'
import Cursor from './Components/Cursor/Cursor.jsx'
import OtherProjects from './Components/OtherProjects/OtherProjects.jsx'
import BGElements from './Components/BackgroundElements/BackgroundElements.jsx'
import NavigationElements from './Components/NavigationElements/NavigationElements.jsx'

function App() {

  const [navPages, setNavPages] = useState([{title: 'Home'}, {title: 'Projects'},{title: 'Skills'}]);
  const [yPosition, setyPosition] = useState(0);
  document.getElementById('root').addEventListener('scroll', ()=> {console.log('scrolled');setyPosition(window.clientY)})
  // const [cursorPosition, setCursorPosition] = useState({x: 0, y: 0});

  // useEffect(() => {
  //   const cursorGlow = document.getElementById('cursor-glow');
  //   const handleMouseMove = (e) => {
  //     cursorGlow.style.left = e.clientX + 'px';
  //     cursorGlow.style.top = e.clientY + 'px';
  //   };
  //   window.addEventListener('mousemove', handleMouseMove);
  //   return () => window.removeEventListener('mousemove', handleMouseMove);
  // }, []);

  return (
    <div className="App">
     <header className='header'>
        <div className='left-header'></div>
        <nav className='right-header'>
          {navPages.map((pages, index)=> (
            <NavigationElements text={pages.title} key={index} index={index} yPosition={yPosition}/>
          ))}
        </nav>
      </header>

      <BGElements />
      <Cursor/>

      <Container>
        <LandingPage />
      </Container>
     
      <Container title='Projects'>
        <ProjectsContainer/>
      </Container>

       <Container title='Skillset'>
        <Skills />
      </Container>

      <Container title='Other Projects'>
        <OtherProjects/>
      </Container>
    </div>
  )
}

export default App
