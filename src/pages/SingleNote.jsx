import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import NoteModal from '../NoteModal/NoteModal';
import { getNoteById } from '../utils/note'


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
        <NoteModal note={note}/>
    )
}

export default SingleNote