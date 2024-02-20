import React, {createContext, useContext, useState} from 'react'

const GlobalContext  = createContext()
export const useGlobalContext = ()=>useContext(GlobalContext)
const Context = ({children}) => {
    // const [count, setCount] = useState(0)
  const [name, setName] = useState("Test")
  const loggedOut = ()=>{
    setName('')
  }
  console.log(children)
  return (
    <GlobalContext.Provider value={{name, loggedOut}}>
        {/* App */}
  {children}
    </GlobalContext.Provider>
  )
}

export default Context
