import React from 'react'
import NoteCard from '../NoteCard/NoteCard';

import './NoteLists_Style.css'
import SectionHeader from './SectionHeader';


const NoteLists = ({ noteLists, onDelete, isArchive, setArchive }) => {

    return (
        <section>
            <SectionHeader isArchive={isArchive}/>
            <div className='note-lists'>
                {
                    noteLists.length > 0 
                    ? noteLists.map(note => (
                        <NoteCard
                            key={note._id}
                            id={note._id}
                            title={note.title}
                            body={note.body}
                            archived={note.isArchived}
                            createdAt={note.createdAt}
                            onDelete={onDelete}
                            setArchive={setArchive}
                        />
                    ))
                    : <p className='not-found'>Empty</p>
                }
            </div>
        </section>
    )
}

export default NoteLists