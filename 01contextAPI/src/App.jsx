import React,{useState} from 'react'
import LoginContextProvider from './context/LoginContextProvider';
import Login from './components/Login';
import Profile from './components/Profile';
import './App.css'

function App() {

  return (
    <div className="App">
      <LoginContextProvider>
        <Login/>
        <Profile/> 
      
      </LoginContextProvider>
   </div>
  )
}

export default App
