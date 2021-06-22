import React,{useState} from 'react';
import ToDoForm from './ToDoForm';
import { AiFillCloseSquare } from 'react-icons/ai';
import { RiEditBoxLine } from 'react-icons/ri';


const Todo = ({ todos, completeToDo, removeToDo, updateToDo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateToDo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if(edit.id){
    return <ToDoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div 
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
      key={index}
    >
      <div key={todo.id} onClick={() => completeToDo(todo.id)}>
        {todo.text}
      </div>

      <div className='icons'>
        <AiFillCloseSquare  
          onClick={() => removeToDo(todo.id)}
          className='delete-icon'
        />
        <RiEditBoxLine 
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />

      </div>
    </div>
  ));
}

export default Todo;
