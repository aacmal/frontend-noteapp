import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../context/UserContext.jsx';

const Profile = () => {
    const {user, setUser} = useContext(UserContext);
    if(!user) {
        return (
            <Link className='auth' to={'/login'}>Login</Link>
        )
    }
    return (
        <span>{user.email}</span>
    )
}

export default Profile