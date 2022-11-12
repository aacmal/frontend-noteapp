import React, { createContext, useEffect, useState } from "react"
import { getUserData } from "../utils/user"

export const UserContext = createContext()

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        if(!user){
            getUserData()
            .then((res) => {
                setUser(res.data)
            })
            .catch((err) => console.log(err))
        }
    }, [])
    
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;