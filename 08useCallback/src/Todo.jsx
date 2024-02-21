import React from 'react'
import { memo } from 'react'

function Todo({todos,addTodo}) {
    console.log("rendered")
  return (
    <div>
      <h1>'hello'</h1>
      {todos.map((todo, index) => {
  return <p key={index}>{todo}</p>;
})}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  )
}

export default memo(Todo)
