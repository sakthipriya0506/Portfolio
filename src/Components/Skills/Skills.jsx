import React from 'react'
import './Skills.css'
import Board from '../Board/Board.jsx'

export default function Skills() {
  return (
    <div className='skills'>
        <Board title='Frontend' languages={[{name : 'HTML', image : '/html.png'}, {name : 'CSS', image : '/css.png'}, {name : 'JS', image : '/JavaScript.svg'}, {name : 'React JS', image : '/react.svg'}]}></Board>
        <Board title='Backend' languages={[{name : 'Node JS', image : 'Node.js.png'}, {name : 'Java', image : 'Java.svg'}, {name : 'MySql', image : '/MySQL.svg'}, {name : 'PgSql', image : 'PostgresSQL.svg'}]}></Board>
        <Board title='Tools' languages={[{name : 'Terminal commands', image : '/Linux.svg'}, {name : 'Zoho Backstage', image : ''}, {name : 'Zoho Show', image : ''}, {name : 'Zoho Survey', image : ''},{name : 'Zoho Catalyst', image : ''}, {name : 'Git Hub', image : ''}, {name : 'Zoho Repository', image : ''}]}></Board>
    </div>
  )
}
