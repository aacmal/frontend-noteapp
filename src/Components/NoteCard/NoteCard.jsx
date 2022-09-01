import React from 'react'
import { showFormattedDate } from '../../utils'
import Archive from '../Icons/Archive'
import Trash from '../Icons/Trash'

import './NoteCard_Style.css'

const NoteCard = ({id, title, body, createdAt, onDelete, archived, setArchive}) => {
  const formatedDate = showFormattedDate(createdAt)
  return (
    <section className='note-card'>
      <h1 className='note-card-heading'>{title}</h1>
      <p className='note-card-date'>{formatedDate}</p>
      <p className='note-card-body'>{body}</p>
      <div className='action'>
        <button className='button-action' onClick={() => setArchive(id)}>
          {
            archived
            ? <Archive isOnArchive={true}/>
            : <Archive/>

          }
        </button>
        <button className='button-action' onClick={() => onDelete(id)}>
          <Trash/>
        </button>
      </div>
    </section>
  )
}

export default NoteCard