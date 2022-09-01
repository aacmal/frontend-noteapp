import React from 'react'
import Archive from '../Icons/Archive'
import List from '../Icons/List'

const SectionHeader = ({ isArchive }) => {
  return (
    <secion className='section-header'>
        {
            !isArchive
            ? <>
                <List/>
                <h1>Notes</h1>
            </>
            : <>
                <Archive/>
                <h1>Archive</h1>
            </>
        }
    </secion>
  )
}

export default SectionHeader