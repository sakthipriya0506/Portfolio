import React, { useState, useEffect } from 'react'
import Text from '../Text/Text';
import './NavigationElements.css'

export default function NavigationElements(props) {
    const {text, index, yPosition} = props;
    const [Positions, setPositions] = useState([0, 1078, 2*1078 + 500])
    const [scrollDetails, setScrollDetails] = useState({left: '0', top: Positions[index], behavior: "smooth"});

    useEffect(() => {
      
    console.log(yPosition);
    }, [yPosition])
    
  return (
    <div className={'navigationElements'+ ((yPosition > Positions[index] && yPosition < Positions[index+1]) ? ' current': '')} onClick={()=> window.scrollTo(scrollDetails)}>
        <Text>{text}</Text>
    </div>
  )
}
