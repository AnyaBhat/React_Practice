import React,{useContext} from 'react'
import { LoginContext } from '../context/LoginContext'
function Profile() {
    const {user}=useContext(LoginContext)
    if(!user){ return (<h1>Not Logged In</h1>)}
    else{
      return (
        <>
          <h1>Profile</h1>
          <h2>Username:{user.username}</h2>
        </>
     )}

    
}

export default Profile
