import React from 'react'
import '../App.css'
const TodoItem = (props) => {
    console.log(todoLists)
  return (
      <div className='todoList'>
          {
             props.todoLists?.text
          }
    </div>
  )
}

export default TodoItem