import logo from './logo.svg';
import './App.css';
import Todos from './features/todo/Todos';
import AddTodos from './features/todo/AddTodos';
import Posts from './components/Posts';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <Navbar />
      <div className="container">        

        <h1 className='a-center'>posts List</h1>

        <Posts />       

      </div>
    </>
  );
}

export default App;
