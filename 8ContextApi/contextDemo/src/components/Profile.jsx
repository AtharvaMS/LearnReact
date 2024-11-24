import React, { useContext } from 'react'
import userContext from '../context/userContext'

function Profile() {
    const {user} = useContext(userContext)

    if(!user) return <div>User not found! Please signup</div>

    return <div><h1>Welcome {user.username}</h1></div>

}

export default Profile