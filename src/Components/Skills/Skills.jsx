import React from 'react'
import './Skills.css'
import Board from '../Board/Board.jsx'

export default function Skills() {
  return (
    <div className='skills'>
        <Board title='Frontend' languages={[{name : 'HTML', image : '/html.png'}, {name : 'CSS', image : '/css.png'}, {name : 'JavaScript', image : '/JavaScript.svg'}, {name : 'React JS', image : '/react.svg'}]}></Board>
        <Board title='Backend' languages={[{name : 'Node JS', image : 'Node.js.png'}, {name : 'Java', image : 'Java.svg'}, {name : 'MySql', image : '/MySQL.svg'}, {name : 'PgSql', image : 'PostgresSQL.svg'}]}></Board>
        <Board title='Tools' languages={[{name : 'Terminal commands', image : '/Linux.svg'}, {name : 'Zoho Backstage', image : '/backstage.svg'}, {name : 'Zoho Show', image : '/show.svg'}, {name : 'Zoho Survey', image : '/survey.svg'},{name : 'Zoho Catalyst', image : '/catalyst.svg'}, {name : 'Git Hub', image : '/GitHub.svg'}, {name : 'Zoho Repository', image : '/repository.ico'}]}></Board>
    </div>
  )
}
