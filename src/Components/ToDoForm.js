import React, {useState, useEffect, useRef} from 'react'

function ToDoForm(props) {

  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value)
  };

  //Handles the submission of a new ToDo
  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });  
    setInput('');
  };

  return (
      <form className='todo-form' onSubmit={handleSubmit}>
        {props.edit ? (
          <>
            <input 
              type="text" 
              placeholder="Add a To Do..."
              value={input}
              name='text'
              className="todo-input"
              onChange={handleChange}
              ref={inputRef}
            />
            <button className="todo-button edit" onClick={handleSubmit}> 
              Edit 
            </button>
          </>
        ) : (
          <>
            <input 
              type="text" 
              placeholder="Add a To Do..."
              value={input}
              name='text'
              className="todo-input"
              onChange={handleChange}
              ref={inputRef}
            />
            <button className="todo-button" onClick={handleSubmit}> 
              Add 
            </button>
          </>
        )}
    </form>
  );
}

export default ToDoForm
