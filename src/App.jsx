import axios from 'axios'
import React, { useState, useEffect } from 'react'
import NoteInput from './Components/NoteInput/NoteInput'
import NoteLists from './Components/NoteLists/NoteLists'
import SearchInput from './Components/SearchInput/SearchInput'
import useLocalStorage from './hooks/useLocalStorage'

import './style.css'
import { getInitialData } from './utils'
import { BASE_URL, getAllNotes } from './utils/api'

const date = new Date()


const App = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true)
  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    axios.get(BASE_URL)
    .then(res => {
      console.log(res);
      setNotes(res.data)
      setLoading(false)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  function handleAddContact(data){
    const {title, body} = data
    setNotes((prevNotes) => {
      return [
        ...prevNotes,
        {
          id: +new Date(),
          title: title,
          body: body,
          createdAt: date.toISOString(),
          archived: false
        }
      ]
    })
  }

  function handleDelete(id){
    console.log(id);
    const filteredNotes = notes.filter(note => note.id !== id)
    setNotes(() => filteredNotes)
  }

  function handleArchive(id){
    const newNote = notes
    const index = newNote.findIndex(note => note.id == id)
    newNote[index].archived = !newNote[index].archived

    setNotes(() => [...newNote])

  }

  const searchResult = notes.filter(note => note.title.toLowerCase().includes(keyword.toLowerCase()))
  const notesData = keyword.length > 0 ? searchResult : notes
  const archived = notesData.filter(note => note.isArchived === true)
  const notArchived = notesData.filter(note => note.isArchived !== true)

  return (
    <>
      <header>
        <h1>Note App</h1>
      </header>
      <main className='container'>
        <NoteInput addNote={handleAddContact}/>
        <SearchInput onChange={(e) => setKeyword(e.target.value)}/>
      {
        loading
          ? <h1>Loading ...</h1>
          : <> 
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
        }
      </main>
    </>
  )
}

export default App