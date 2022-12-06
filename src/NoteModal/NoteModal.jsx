import React from 'react'
import Modal from '../Components/Modal/Modal'
import { showFormattedDate } from '../utils'

import './NoteModal_style.css'

const NoteModal = ({ note }) => {
  const formatedDate = showFormattedDate(note?.createdAt)

  return (
    <Modal position='top'>
      <div className='note-modal'>
        <div className='heading-note'>
          <h1 className='title'>{note?.title}</h1>
          <p className='date'>{formatedDate}</p>
        </div>
        <p className='body'>{note?.body}</p>
      </div>
    </Modal>
  )
}

export default NoteModal