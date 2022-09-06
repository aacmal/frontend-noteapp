import React, { useState } from 'react'
import NoteInput from './Components/NoteInput/NoteInput'
import NoteLists from './Components/NoteLists/NoteLists'
import SearchInput from './Components/SearchInput/SearchInput'
import useLocalStorage from './hooks/useLocalStorage'

import './style.css'
import { getInitialData } from './utils'

const date = new Date()


function App(){
  const [notes, setNotes] = useLocalStorage('notes', getInitialData())
  const [keyword, setKeyword] = useState('')

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
    // this.setState((prevState) => {
    //     return {
    //         allNotes: [
    //             ...prevState.allNotes,
    //             {
    //                 id: +new Date(),
    //                 title: title,
    //                 body: body,
    //                 createdAt: date.toISOString(),
    //                 archived: false
    //             }
    //         ]
    //     }
    // })
  }

  function handleDelete(id){
    console.log(id);
    const filteredNotes = notes.filter(note => note.id !== id)
    setNotes(() => filteredNotes)
    // this.setState({allNotes: notes})
  }

  function handleArchive(id){
    const newNote = notes
    const index = newNote.findIndex(note => note.id == id)
    newNote[index].archived = !newNote[index].archived

    setNotes(() => [...newNote])

    // this.setState({
    //   allNotes: newNote
    // })

  }

  const searchResult = notes.filter(note => note.title.toLowerCase().includes(keyword.toLowerCase()))
  const notesData = keyword.length > 0 ? searchResult : notes
  const archived = notesData.filter(note => note.archived === true)
  const notArchived = notesData.filter(note => note.archived !== true)

  return (
    <>
      <header>
        <h1>Note App</h1>
      </header>
      <main className='container'>
        <NoteInput addNote={handleAddContact}/>
        <SearchInput onChange={(e) => setKeyword(e.target.value)}/>
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
      </main>
    </>
  )
}

export default App