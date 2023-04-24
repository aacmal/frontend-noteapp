import React from 'react'
import { useContext } from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from '../Components/Modal/Modal'
import { NoteContext } from '../context/NoteContext'
import { showFormattedDate } from '../utils'
import { getAllNotes, updateNote } from '../utils/note'
import { toast } from 'react-toastify'

import './NoteModal_style.css'

const NoteModal = ({ note }) => {
  const formatedDate = showFormattedDate(note?.updatedAt)
  const titleRef = useRef();
  const bodyRef = useRef();
  const { setNotes } = useContext(NoteContext);
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if(!titleRef.current.value || !bodyRef.current.value) return toast.error('Title and body must be filled')
    if(titleRef.current.value.length > 60) return toast.error('Title must be less than 60 characters')
    const data = {
      title: titleRef.current.value,
      body: bodyRef.current.value
    }
    // TODO add loading state when updating note
    updateNote(note?._id, data)
    .then((res) => {
      console.log(res)
      getAllNotes().then(res => setNotes(res.data))
      navigate('/')
    })
    .catch((err) => console.log(err))
  }

  return (
    <Modal position='top'>
      <form action="" onSubmit={handleSubmit}>
        <div className='note-modal'>
          <div>
            <div className='heading-note'>
              <input ref={titleRef} className='input-title' type="text" defaultValue={note?.title} />
              <p className='date'>{formatedDate}</p>
            </div>
            <textarea ref={bodyRef} name="" id="" cols="30" rows="10" defaultValue={note?.body} spellCheck={false}></textarea>
          </div>
          <button type='submit' className='save-button'>Save</button>
        </div>  
      </form>
    </Modal>
  )
}

export default NoteModal