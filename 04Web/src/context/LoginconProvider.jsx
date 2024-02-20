import React from 'react'
import { useState } from 'react'
import Logincon  from './Logincon'

const LoginconProvider = ({children}) => {
    const [user,setUser]=useState({})
  return (
    <Logincon.Provider value={{user,setUser}}>
      {children}
    </Logincon.Provider>
  )
}

export default LoginconProvider
