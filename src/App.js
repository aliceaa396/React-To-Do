import ToDoList from "./Components/ToDoList";
import ToDo from "./ToDo.png"
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> React To Do List</h1>
        <div className="ToDoIconBox">
          <img src={ToDo} className="ToDoPng"  />
        </div>
      <ToDoList />
    </div>
  );
}

export default App;
