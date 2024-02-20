import React, { useState,  createContext, useContext } from 'react';import './App.css'
import Navbar from './components/Navbar'
import LoginconProvider from './context/LoginconProvider'
import Logincon  from './context/Logincon'

const AppContext = createContext()
export const useNavbarContext = ()=> useContext(AppContext)

function App() {

  return (
   <AppContext.Provider value="Hello">
    <Navbar/>
    </AppContext.Provider>
      
   
  )
}

export default App
