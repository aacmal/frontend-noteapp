import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import NoteInput from '../Components/NoteInput/NoteInput';
import NoteLists from '../Components/NoteLists/NoteLists';
import SearchInput from '../Components/SearchInput/SearchInput';
import { UserContext } from '../context/UserContext';
import { addNewNote, deleteNote, getAllNotes, moveNote } from '../utils/note';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

const AllNotes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true)
  const [keyword, setKeyword] = useState('')
  const [deleteId, setDeleteId] = useState(null);
  const {user} = useContext(UserContext);

  useEffect(() => {
    if(user){
      renderNote(() => toast('Note Updated', {autoClose: 800}))
    }
  }, [user])
  
  function renderNote(callback){
    getAllNotes()
    .then((res) => {
      console.log(res);
      setNotes(res.data)
      setLoading(false)
      callback();
    })
    .catch((err) => {
      console.log(err);
      setLoading(false)
    })
  }

  function toastUpdate(id, message, type){
    toast.update(id, {
      autoClose: 3500,
      render: message,
      type: type,
      isLoading: false,
    })
  }

  function handleAddNote(data){
    const toastIds = toast.loading('Adding note...');
    addNewNote(data)
    .then(async (res) => {
      console.log(res);
      renderNote(
        () => toastUpdate(toastIds, 'Note added successfully', 'success'),
      )
    })
    .catch((err) => {
      console.log(err);
      toastUpdate(toastIds, 'Failed to add note', 'error')
    })
  }

  function handleDelete(id){
    if(deleteId){
      const toastId = toast.loading('Deleting note...');
      deleteNote(id)
      .then((res) => {
        console.log(res);
        renderNote(() => toastUpdate(toastId, 'Note deleted successfully', 'success'))
      })
      .catch((err) => console.log(err))
    } else {
      alert('Please click delete button again to confirm')
    }
  }

  function handleArchive(id){
    const index = notes.findIndex(note => note._id === id)
    const updatedNote = {
      ...notes[index],
      isArchived: !notes[index].isArchived
    }
    
    const toastId = toast.loading(updatedNote.isArchived ? 'Archiving note...' : 'Unarchiving note...');
    const message = updatedNote.isArchived ? 'Note archived successfully' : 'Note unarchived successfully'
    moveNote(id, updatedNote)
    .then((res) => {
      console.log(res);
      renderNote(() => toastUpdate(toastId, message, 'success'))
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
      <AlertDialog.Root>
      {
        loading
          ? <h1>Loading ...</h1>
          : user
            ? (
              <> 
                <NoteLists 
                  noteLists={notArchived}
                  onDelete={(noteId) => setDeleteId(noteId)}
                  setArchive={handleArchive}
                />
                <hr />
                <NoteLists
                  isArchive={true} 
                  noteLists={archived}
                  onDelete={(noteId) => setDeleteId(noteId)}
                  setArchive={handleArchive}
                />
              </>
            )
            : <h2 className='auth-description'>Please Login or create new account</h2> 
        }
        <AlertDialog.Portal>
          <AlertDialog.Overlay className='AlertDialogOverlay'/>
          <AlertDialog.Content className='AlertDialogContent'>
            <AlertDialog.Title className='AlertDialogTitle'>Are you sure?</AlertDialog.Title>
            <AlertDialog.Description className='AlertDialogDescription'>
              This action cannot be undone, This will permanently delete your note
            </AlertDialog.Description>
            <div className='AlertButton'>
              <AlertDialog.Cancel className='AlertDialogCancel'>Cancel</AlertDialog.Cancel>
              <AlertDialog.Action onClick={() => handleDelete(deleteId)} className='AlertDialogAction'>Delete</AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </main>
  )
}

export default AllNotes