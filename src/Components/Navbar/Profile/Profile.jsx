import classNames from 'classnames';
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { UserContext } from '../../../context/UserContext.jsx';
import { logout } from '../../../utils/user.js';
import { Chevron } from '../../dls/Icon/Icon.jsx';

import './Profile_style.css'

const Profile = () => {
    const {user, setUser} = useContext(UserContext);
    if(!user) {
        return (
            <Link className='auth' to={'/login'}>Login</Link>
        )
    }

    const handleLogout = () => {
        logout()
        .then((res) => {
            setUser(null);
            toast('Logged out successfully')
            console.log(res);
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className='user'>
            <span className='user-email'>{user.email}</span>
            <Chevron
                className={classNames('chevron')}
            />
            <div onClick={handleLogout} className='user-dropdown'>
                <span>Logout</span>
            </div>
        </div>
    )
}

export default Profile