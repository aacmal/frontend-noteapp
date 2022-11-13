import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import NoteInput from '../Components/NoteInput/NoteInput';
import NoteLists from '../Components/NoteLists/NoteLists';
import SearchInput from '../Components/SearchInput/SearchInput';
import { UserContext } from '../context/UserContext';
import { BASE_URL } from '../utils/api';
import { addNewNote, deleteNote, getAllNotes, moveNote } from '../utils/note';

const AllNotes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true)
  const [keyword, setKeyword] = useState('')
  const {user} = useContext(UserContext);

  useEffect(() => {
    renderNote()
  }, [user])
  
  function renderNote(){
    getAllNotes()
    .then((res) => {
      console.log(res);
      setNotes(res.data)
      setLoading(false)
    })
    .catch((err) => {
      console.log(err);
      setLoading(false)
    })
  }

  function handleAddNote(data){
    addNewNote(data)
    .then((res) => {
      console.log(res);
      toast('Note added successfully')
      renderNote()
    })
    .catch((err) => {
      console.log(err);
    })
  }

  function handleDelete(id){
    deleteNote(id)
    .then((res) => {
      console.log(res);
      toast('Note deleted successfully')
      renderNote()
    })
    .catch((err) => console.log(err))
  }

  function handleArchive(id){
    const index = notes.findIndex(note => note._id == id)
    const updatedNote = {
      ...notes[index],
      isArchived: !notes[index].isArchived
    }
    console.log(index);

    moveNote(id, updatedNote)
    .then((res) => {
      console.log(res);
      if(updatedNote.isArchived){
        toast('Note archived successfully')
      } else {
        toast('Note unarchived successfully')
      }
      renderNote()
    })
    .catch((err) => console.log(err))

  }

  const searchResult = notes.filter(note => note.title.toLowerCase().includes(keyword.toLowerCase()))
  const notesData = keyword.length > 0 ? searchResult : notes
  const archived = notesData.filter(note => note.isArchived === true)
  const notArchived = notesData.filter(note => note.isArchived !== true)

  return (
    <main className='container'>
      <NoteInput addNote={handleAddNote}/>
      <SearchInput onChange={(e) => setKeyword(e.target.value)}/>
    {
      loading
        ? <h1>Loading ...</h1>
        : user
          ? (
            <> 
              <NoteLists 
                noteLists={notArchived}
                onDelete={handleDelete}
                setArchive={handleArchive}
              />
              <hr />
              <NoteLists
                isArchive={true} 
                noteLists={archived}
                onDelete={handleDelete}
                setArchive={handleArchive}
              />
            </>
          )
          : <h2 className='auth-description'>Please Login or create new account</h2> 
      }
    </main>
  )
}

export default AllNotes