import React from 'react'
import Archive from '../Icons/Archive'

const ArchiveButton = ({ archived, onClick }) => {
  return (
    <button className='button-action' onClick={onClick}>
        {
            archived
            ? <Archive isOnArchive={true}/>
            : <Archive/>
        }
    </button>
  )
}

export default ArchiveButton