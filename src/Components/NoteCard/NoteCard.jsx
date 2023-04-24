import React from 'react'
import { showFormattedDate } from '../../utils'
import ArchiveButton from './ArchiveButton'
import DeleteButton from './DeleteButton'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { motion } from 'framer-motion'

import './NoteCard_Style.css'
import { Link } from 'react-router-dom'

const NoteCard = ({id, title, body, createdAt, onDelete, archived, setArchive}) => {
  const formatedDate = showFormattedDate(createdAt)
  return (
    <motion.section 
    layoutId={id} 
    // create animation when new item added
    initial={{ scale: 0.8 }}
    animate={{ scale: 1 }}
    whileTap={{
      scale: 0.95
    }} 
    className='note-card'>
      <Link className='content' to={`/${id}`}>
        <h1 className='note-card-heading'>{title}</h1>
        <p className='note-card-date'>{formatedDate}</p>
        <p className='note-card-body'>{body}</p>
      </Link>
      <div className='action'>
        <ArchiveButton onClick={() => setArchive(id)} archived={archived}/>
        <AlertDialog.Trigger asChild>
            <DeleteButton onClick={() => onDelete(id)}/>
        </AlertDialog.Trigger>
      </div>
    </motion.section>
  )
}

export default NoteCard