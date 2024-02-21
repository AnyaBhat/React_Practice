import React from 'react'
import { useCallback,useState } from 'react'
import Todo from './Todo'
// const initialState = {
//   count: 0
// }


// function reducer (state, action){
//   console. log(state, action)
//   const {type, payload: {a, b}} = action
//   if(type==='INCREMENT'){
  
//   return {...state, count: state.count+a}
//   }else {
//     if(state.count<=5) return state
//     return {...state, count: state.count-b}
//   }
//   return state
// }



const App = () => {

  const [count, setCount] = useState(0);
  const[todo,setTodo]=useState([]);
  // const {count} = state


  function increment(count){
    count=count+1
    setCount(count)
  }
  function decrement(count){
    count=count-1
    setCount(count)
  }
  const addTodo=useCallback(()=>{
    setTodo((t)=>[...t,"New Todo"])
  },[todo])

  return (
    <div>
      <Todo todos={todo} addTodo={addTodo}/>
      <button onClick={()=>increment(count)}>+</button>
      <span>{count}</span>
      <button onClick={()=>decrement(count)}>-</button>
    </div>
  )
}

export default App
