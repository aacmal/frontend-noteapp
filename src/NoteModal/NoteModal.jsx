import React from 'react'
import Modal from '../Components/Modal/Modal'

import './NoteModal_style.css'

const NoteModal = ({ note }) => {
  return (
    <Modal>
        <div className='note-modal'>
            <h1 className='titles'>{note?.title}</h1>
            <hr className='note-divider'/>
            <p className='body'>{note?.body}</p>
        </div>
    </Modal>
  )
}

export default NoteModal