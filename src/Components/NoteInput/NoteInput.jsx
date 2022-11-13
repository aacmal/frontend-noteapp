import React, { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

import './NoteInput_Style.css'

const NoteInput = ({ addNote }) => {
    const [state, setState] = useState({
        title: '',
        body: '',
        maxTitle: 61,
    })
    const inputBodyRef = useRef()
    const { user } = useContext(UserContext);
    const navigate = useNavigate()

    function onTitleChange(e){
        const value = e.target.value
        setState(() => {
            if(state.maxTitle > 0){
                return {
                    title: value,
                    maxTitle: 61 - value.length
                }
            }
        })
    }

    function onSubmitEventHandler(event){
        event.preventDefault();
        if(!user){
            return navigate('/login')
        }
        const bodyContent = inputBodyRef.current.value;
        const data = {
            title: state.title,
            body: bodyContent,
            isArchived: false,
        }
        console.log(data);
        addNote(data)
        inputBodyRef.current.value = '';
        setState({
            title: '',
            body: '',
            maxTitle: 61,
        })

    }
    return (
        <form className='note-input' onSubmit={onSubmitEventHandler}>
            <div className='title-wrapper'>
                <input 
                    value={state.title} 
                    onChange={onTitleChange}
                    maxLength={60} 
                    placeholder='Judul' 
                    type="text" 
                    className='note-input-title'
                    minLength={5}
                    required={true}
                />
                <span className='counter'>Tersisa {state.maxTitle-1} Karakter</span>
            </div>
            <textarea 
                minLength={7}
                ref={inputBodyRef}
                // value={state.body} 
                // onChange={onBodyChange}
                placeholder='Tuliskan catatannya disini' 
                type="text" 
                className='note-input-body'
                required={true}
            />
            <button className='note-input-submit' type="submit">Tambahkan</button>
        </form>
    )
}

export default NoteInput;