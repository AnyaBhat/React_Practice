import React from 'react'
import { useReducer } from 'react'

const initialState = {
  count: 0
}


function reducer (state, action){
  console. log(state, action)
  const {type, payload: {a, b}} = action
  if(type==='INCREMENT'){
  
  return {...state, count: state.count+a}
  }else {
    if(state.count<=5) return state
    return {...state, count: state.count-b}
  }
  return state
}


const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)
  const {count} = state
  return (
    <div>
      <button onClick={()=>dispatch({type:"INCREMENT", payload:{a:5, b:10}})}>+</button>
      <span>{count}</span>
      <button onClick={()=>dispatch({type:"DECREMENT", payload:{a:5, b:10}})}>-</button>
    </div>
  )
}

export default App
