import React from 'react'
import Trash from '../Icons/Trash'

const DeleteButton = ({ onClick }) => {
  return (
    <button className='button-action' onClick={onClick}>
        <Trash/>
    </button>
  )
}

export default DeleteButton