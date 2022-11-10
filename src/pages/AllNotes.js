import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NoteInput from '../Components/NoteInput/NoteInput';
import NoteLists from '../Components/NoteLists/NoteLists';
import SearchInput from '../Components/SearchInput/SearchInput';
import { BASE_URL } from '../utils/api';
import { getAllNotes } from '../utils/note';

const AllNotes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true)
  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    renderNote()
  }, [])

  function renderNote(){
    getAllNotes()
    .then((res) => {
      console.log(res);
      setNotes(res.data)
      setLoading(false)
    })
    // axios.get(BASE_URL, {withCredentials: true, headers: {'Content-Type': 'application/x-www-form-urlencoded'}},)
    // .then(res => {
    //   console.log(res);
    //   setNotes(res.data)
    //   setLoading(false)
    // })
    // .catch(err => {
    //   console.log(err)
    // })
  }

  function handleAddNote(data){
    console.log(data);
    axios.post(BASE_URL, data, {withCredentials: true})
    .then((res) => {
      console.log(res);
      renderNote()
    })
    .catch((err) => console.log(err))
  }

  function handleDelete(id){
    axios.delete(`${BASE_URL}/${id}`)
    .then((res) => {
      console.log(res);
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

    axios.put(`${BASE_URL}/${id}`, updatedNote)
    .then((res) => {
      console.log(res);
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
  )
}

export default AllNotes