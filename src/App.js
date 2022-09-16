import React,{useState} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {
  //my states
  const[inputText,setInputText] =useState("");
  const[todos,setTodos]=useState([])
  const[status,setStatus] = useState("all")
  const[filteredTodos,setFilteredTodos] = useState([])

  //functions
  const filterHandler =() =>{
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.comppled == true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.comppled == false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Sandaru's ToDo List</h1>
      </header>
      <Form inputText={inputText}
        todos={todos}
        setTodos={setTodos} 
        setInputText={setInputText} 
        setStatus={setStatus}
      />
      <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
