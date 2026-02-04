import React from 'react'
import './Skills.css'
import Board from '../Board/Board.jsx'

export default function Skills() {
  return (
    <div className='skills'>
        <Board title='Frontend' languages={[{name : 'HTML', image : ''}, {name : 'CSS', image : ''}, {name : 'JS', image : ''}, {name : 'React JS', image : ''}]}></Board>
        <Board title='Backend' languages={[{name : 'Node JS', image : ''}, {name : 'Java', image : ''}, {name : 'JS', image : ''}, {name : 'MySql', image : ''}, {name : 'PgSql', image : ''}]}></Board>
        <Board title='Others' languages={[{name : 'Linux terminal commands', image : ''}, {name : 'Zoho Backstage', image : ''}, {name : 'Zoho Show', image : ''}, {name : 'Zoho Survey', image : ''},{name : 'Zoho Catalyst', image : ''}, {name : 'Git Hub', image : ''}, {name : 'Zoho Repository', image : ''}]}></Board>
    </div>
  )
}
