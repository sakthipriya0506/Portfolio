import React, { useEffect, useState } from 'react'
import LandingPage from './Components/LandingPage/LandingPage.jsx'
import Container from './Components/Container/Container.jsx'
import Skills from './Components/Skills/Skills.jsx'
import ProjectsContainer from './Components/ProjectsContainer/ProjectsContainer.jsx'
import './App.css'
import Cursor from './Components/Cursor/Cursor.jsx'
import OtherProjects from './Components/OtherProjects/OtherProjects.jsx'
import BGElements from './Components/BackgroundElements/BackgroundElements.jsx'

function App() {

  const [cursorPosition, setCursorPosition] = useState({x: 0, y: 0});

  useEffect(() => {
    const cursorGlow = document.getElementById('cursor-glow');
    const handleMouseMove = (e) => {
      cursorGlow.style.left = e.clientX + 'px';
      cursorGlow.style.top = e.clientY + 'px';
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="App" onMouseMove={(e) => setCursorPosition({x: e.clientX, y: e.clientY})}>
      <header></header>
      <span className="cursor-glow" id="cursor-glow"></span>
      <BGElements />
      <Cursor x={cursorPosition.x} y={cursorPosition.y} />
      <Container>
        <LandingPage />
      </Container>
      <Container>
        <Skills />
      </Container>
      <Container>
        <ProjectsContainer/>
      </Container>
      <Container>
        <OtherProjects/>
      </Container>
    </div>
  )
}

export default App
