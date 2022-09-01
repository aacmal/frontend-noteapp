import React from 'react'
import { showFormattedDate } from '../../utils'
import ArchiveButton from './ArchiveButton'
import DeleteButton from './DeleteButton'

import './NoteCard_Style.css'

const NoteCard = ({id, title, body, createdAt, onDelete, archived, setArchive}) => {
  const formatedDate = showFormattedDate(createdAt)
  return (
    <section className='note-card'>
      <h1 className='note-card-heading'>{title}</h1>
      <p className='note-card-date'>{formatedDate}</p>
      <p className='note-card-body'>{body}</p>
      <div className='action'>
        <ArchiveButton onClick={() => setArchive(id)} archived={archived}/>
        <DeleteButton  onClick={() => onDelete(id)}/>
      </div>
    </section>
  )
}

export default NoteCard