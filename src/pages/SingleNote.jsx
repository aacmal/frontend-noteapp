import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getNoteById } from '../utils/note'

import './SingleNote_style.css'

const SingleNote = () => {
    const { noteId } = useParams();
    const [note, setNote] = useState(null);

    useEffect(() => {
        getNoteData(noteId)

    }, [])

    function getNoteData(id){
        getNoteById(id)
        .then((res) => {
            console.log(res);
            setNote(res.data.note)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <div className='single-note container'>
            <h1 className='title'>{note?.title}</h1>
            <hr />
            <p className='body'>{note?.body}</p>
        </div>
    )
}

export default SingleNote