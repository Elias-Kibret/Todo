import React, {useState} from 'react';
import TodoForm from '../src/component/TodoForm'
import TodoItem from './component/TodoItem';
import '../src/App.css'
const App = () => {
  const [todos, setTodos]=useState([])
  const addTodo = (text) => {
    let id = 1
    if (todos.length > 0) {
      id=todos[0].id+1
    }
    let todo = {
      id: id,
      text: text
    }
    console.log(todo)
    setTodos([todo,...todos])
  }
  return (
    <div className='App'>
      <div className='todoWrapper'>

      <TodoForm addTodo={addTodo} />
      {
        todos?.map((todoLists) => {
  
          return (
            <TodoItem key={todoLists.id} props={todoLists} />
          )
        })
      }
      </div>
      <h1>Todo List</h1>
    </div>
  );
};

export default App;