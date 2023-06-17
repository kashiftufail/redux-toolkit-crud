import logo from './logo.svg';
import './App.css';
import Todos from './features/todo/Todos';
import AddTodos from './features/todo/AddTodos';

function App() {
  return (
    <div className="App">

      <h1>Todos List</h1>
      
      <Todos />

      <h3>ADD Todos</h3>

      <AddTodos />

      <br />
      <br />

    </div>
  );
}

export default App;
