import React from 'react'
import './Cursor.css'

export default function Cursor(props) {
const {x, y} = props;

const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
 document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';

            setTimeout(() => {
                cursorFollower.style.left = e.clientX + 'px';
                cursorFollower.style.top = e.clientY + 'px';
            }, 100);
        });

  return (
    <React.Fragment>
        <span className='cursor'></span>
        <span className='cursor-follower'></span>
    </React.Fragment>
  )
}
