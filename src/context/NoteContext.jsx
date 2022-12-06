import React, { createContext, useState } from "react"

export const NoteContext = createContext()

const NoteContextProvider = ({ children }) => {
    const [notes, setNotes] = useState([])
    
    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {children}
        </NoteContext.Provider>
    )
}

export default NoteContextProvider;