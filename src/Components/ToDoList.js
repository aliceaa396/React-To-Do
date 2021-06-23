import React, {useState} from 'react'
import Todo from './Todo';
import ToDoForm from './ToDoForm'

function ToDoList() {
  const [todos, setTodos] = useState([])

  //Add a To Do Func
  const addToDo= todo => {
    //If the text field is empty it will not allow you to add
    if(!todo.text || /^\s*$/.test(todo.text)){
      return;
    }
    const newTodos = [todo,...todos];
    setTodos(newTodos);
    console.log(...todos);
  };

  //Update To Do Func
  const updateToDo = (toDoId, newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text)){
      return;
    }
    setTodos(prev => prev.map(item => (item.id === toDoId ?  newValue : item )));
  };

   //Remove To Do Func
  const removeToDo = id => {
    const removeArr = [...todos].filter(todo=> todo.id !== id)
    setTodos(removeArr)
  };

  const completeToDo = id => {
    let updatedToDos = todos.map(todo=> {
      if(todo.id === id){
        todo.isComplete = !todo.isComplete
      }
      return todo;
    });
    setTodos(updatedToDos);
  };

  return (
    //implement date in title and "To Do List for 6/22/21"
    <>
    
      <h2> Whats on the Agenda </h2>
      <ToDoForm onSubmit={addToDo} />
      <Todo 
        todos={todos}
        completeToDo={completeToDo}
        removeToDo={removeToDo}
        updateToDo={updateToDo}
      />
    </>
  )
}

export default ToDoList
