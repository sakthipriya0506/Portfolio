import React, { useRef } from 'react'
import './Cursor.css'

export default function Cursor() {

const cursor = useRef(null);
const cursorFollower = useRef(null);
const cursorGlow = useRef(null);

 document.addEventListener('mousemove', (e) => {
            cursor.current.style.left = e.clientX + 'px';
            cursor.current.style.top = e.clientY + 'px';
            cursorGlow.current.style.left = e.clientX + 'px';
            cursorGlow.current.style.top = e.clientY + 'px';

            setTimeout(() => {
                cursorFollower.current.style.left = e.clientX + 'px';
                cursorFollower.current.style.top = e.clientY + 'px';
            }, 100);
        });

  return (
    <React.Fragment>
        <span ref={cursor} className='cursor'></span>
        <span ref={cursorFollower} className='cursor-follower'></span>
        <span ref={cursorGlow} className="cursor-glow" id="cursor-glow"></span>
    </React.Fragment>
  )
}
