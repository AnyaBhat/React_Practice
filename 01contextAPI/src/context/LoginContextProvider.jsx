import React, { useState } from 'react'
import { LoginContext } from './LoginContext'
const LoginContextProvider = ({children}) => {
  
  const [user,setUser]=useState(null)
    return (
    <LoginContext.Provider value={{user,setUser}}>
        {children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider
