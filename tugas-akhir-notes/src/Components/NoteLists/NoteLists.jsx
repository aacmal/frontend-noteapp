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
                            key={note.id}
                            id={note.id}
                            title={note.title}
                            body={note.body}
                            archived={note.archived}
                            createdAt={note.createdAt}
                            onDelete={onDelete}
                            setArchive={setArchive}
                        />
                    ))
                    : <p className='not-found'>Tidak ditemukan</p>
                }
            </div>
        </section>
    )
}

export default NoteLists