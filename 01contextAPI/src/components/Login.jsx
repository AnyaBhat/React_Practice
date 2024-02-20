import React,{useState,useContext} from 'react'
import { LoginContext } from '../context/LoginContext';

function Login() {
    const[password,setPassword]=useState('false');
    const [username,setUsername]=useState('');
  
    const {setUser}=useContext(LoginContext)
    const handleSubmit = (e)=>{
        setUser({username,password})
    }
  return (
    <>
      <input type="text" 
      placeholder='Username..' 
      value={username}
      onChange={(e)=>{
        setUsername(e.target.value);
        }}
        />
        <input type="password"
         placeholder="Password" 
        value={password}
        onChange={(e)=>{
        setPassword(e.target.value);
        }}/>
        <button onClick={()=>{
            handleSubmit()
        }}>LOGIN</button>
    </>
  )
}

export default Login
