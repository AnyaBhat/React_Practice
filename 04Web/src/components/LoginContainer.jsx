import React  from 'react'
import { useGlobalContext } from '../Context'
import { useNavbarContext } from '../App'



const LoginContainer = () => {
   
 const {name, loggedOut} = useGlobalContext()
  const value = useNavbarContext()
    if(!name){
        return <p>User logged out</p>
    }
  return (
    <div>
      <p>Hello {name} {value} </p>
      <button onClick={loggedOut}>Logout</button>
    </div>
  )
}

export default LoginContainer
