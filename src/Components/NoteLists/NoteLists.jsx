import React, { Component } from 'react'
import { getInitialData } from '../../utils'
import Archive from '../Icons/Archive';
import List from '../Icons/List';
import NoteCard from '../NoteCard/NoteCard';
import NoteInput from '../NoteInput/NoteInput';

import './NoteLists_Style.css'

const date = new Date()



// export default class NoteLists extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             notes: getInitialData()
//         }

//         this.handleAddContact = this.handleAddContact.bind(this)
//     }

//     componentDidMount(){
//         console.log(this.state);
//     }

//     handleAddContact(data){
//         console.log(data);
//         const {title, body} = data
//         this.setState((prevState) => {
//             return {
//                 notes: [
//                     ...prevState.notes,
//                     {
//                         id: +new Date(),
//                         title: title,
//                         body: body,
//                         createdAt: date.toISOString(),
//                         archived: false
//                     }
//                 ]
//             }
//         })
//         console.log(this.state);
//     }

//     render() {
//         const notes = this.state.notes
//         return (
//             <>
//                 <NoteInput
//                     addNote={(data) => this.handleAddContact(data)}
//                 />
//                 <div className='note-lists'>
//                     {
//                         notes.map(note => (
//                             <NoteCard
//                                 title={note.title}
//                                 body={note.body}
//                                 createdAt={note.createdAt}
//                             />
//                         ))
//                     }
//                 </div>
//                 <hr />
//                 <section>
//                     <Archivee/>
//                     <h1>Archived</h1>
//                 </section>
//                 <section className='note-lists'>
                    
//                 </section>
//             </>
//         )
//     }
// }


function NoteLists({ noteLists, onDelete, isArchive, setArchive }){

    return (
        <section>
            <div className='section-header'>
            {
                !isArchive
                ? <>
                    <List/>
                    <h1>Notes</h1>
                </>
                : <>
                    <Archive/>
                    <h1>Archive</h1>
                </>
            }
            </div>
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