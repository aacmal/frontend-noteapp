import React, { Component } from 'react'

import './NoteInput_Style.css'

export default class NoteInput extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            body: '',
            maxTitle: 61,
        }

        this.onTitleChange = this.onTitleChange.bind(this)
        this.onBodyChange = this.onBodyChange.bind(this)
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
    }

    onTitleChange(e){
        const value = e.target.value
        this.setState(() => {
            if(this.state.maxTitle > 0){
                return {
                    title: value,
                    maxTitle: 61 - value.length
                }
            }
        })
    }

    onBodyChange(e){
        this.setState(() => {
            return {
                body: e.target.value
            }
        })
    }

    onSubmitEventHandler(e){
        e.preventDefault()
        this.props.addNote(this.state)
    }


    render() {
        return (
            <form className='note-input' onSubmit={this.onSubmitEventHandler}>
                <div className='title-wrapper'>
                    <input 
                        value={this.state.title} 
                        onChange={this.onTitleChange}
                        maxLength={60} 
                        placeholder='Judul' 
                        type="text" 
                        className='note-input-title'
                        minLength={5}
                        required={true}
                    />
                    <span className='counter'>Tersisa {this.state.maxTitle-1} Karakter</span>
                </div>
                <textarea 
                    minLength={7}
                    value={this.state.body} 
                    onChange={this.onBodyChange}
                    placeholder='Tuliskan catatannya disini' 
                    type="text" 
                    className='note-input-body'
                    required={true}
                />
                <button className='note-input-submit' type="submit">Tambahkan</button>
            </form>
        )
    }
}
