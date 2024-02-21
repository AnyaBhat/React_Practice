import React from 'react'
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
function Todos() {
  
  const todos =useSelector(state=>state.todo.todos)
  const dispatch=useDispatch()


  if (!todos) {
    return <div>Loading...</div>;
  }
  return (
    <>
    <div>Todos</div>
    <ul className='list-none'>
    {todos.map((todo)=>(
        <li key={todo.id}>
          <span className='text-black'>{todo.text}</span>
          <button onClick={()=>dispatch(removeTodo(todo.id))}>Delete</button>
        </li>
    ))}
    </ul>
    </>
  );
}

export default Todos
