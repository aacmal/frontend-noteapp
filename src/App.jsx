import React from 'react'
import NoteInput from './Components/NoteInput/NoteInput'
import NoteLists from './Components/NoteLists/NoteLists'
import SearchInput from './Components/SearchInput/SearchInput'

import './style.css'
import { getInitialData } from './utils'

const date = new Date()


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      allNotes: getInitialData(),
      searchKeyword: ''
    }

    this.handleAddContact = this.handleAddContact.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleArchive = this.handleArchive.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }


  handleAddContact(data){
    const {title, body} = data
    this.setState((prevState) => {
        return {
            allNotes: [
                ...prevState.allNotes,
                {
                    id: +new Date(),
                    title: title,
                    body: body,
                    createdAt: date.toISOString(),
                    archived: false
                }
            ]
        }
    })
  }

  handleDelete(id){
    const notes = this.state.allNotes.filter(note => note.id !== id)
    this.setState({allNotes: notes})
  }

  handleArchive(id){
    const newNote = this.state.allNotes
    const index = newNote.findIndex(note => note.id == id)
    newNote[index].archived = !newNote[index].archived

    this.setState({
      allNotes: newNote
    })

  }

  handleSearch(e){
    this.setState({
      searchKeyword: e.target.value
    })
  }

  render(){
    const searchResult = this.state.allNotes.filter(note => note.title.toLowerCase().includes(this.state.searchKeyword.toLowerCase()))
    const notesData = this.state.searchKeyword.length > 0 ? searchResult : this.state.allNotes
    const archived = notesData.filter(note => note.archived === true)
    const notArchived = notesData.filter(note => note.archived !== true)
    return (
      <>
        <header>
          <h1>Note App</h1>
        </header>
        <main className='container'>
          <NoteInput addNote={this.handleAddContact}/>
          <SearchInput onChange={this.handleSearch}/>
          <NoteLists 
            noteLists={notArchived}
            onDelete={this.handleDelete}
            setArchive={this.handleArchive}
          />
          <hr />
          <NoteLists 
            isArchive={true} 
            noteLists={archived}
          />
        </main>
      </>
    )
  }
}

export default App