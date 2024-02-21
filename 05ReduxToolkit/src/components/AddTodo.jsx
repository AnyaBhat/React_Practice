import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {

    const[input,setInput]=useState('')
    const dispatch=useDispatch()

    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <form onSubmit={handleSubmit} className='space-x-3 mt-12'>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Enter a Todo' />
        <button type='submit'className=''>Add Todo</button>
    </form>
  )

}

export default AddTodo
