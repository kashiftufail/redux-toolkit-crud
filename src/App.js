import './App.css';
import Posts from './components/Posts';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Post from './components/Post';

import { BrowserRouter as Router, Route, Link, useRoutes } from 'react-router-dom';

function Routes() {
  const element = useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "/posts",
      element: <Posts />      
    },
    { path: "/posts/:id", element: <Post /> },
    { path: "/contact", element: <Contact /> },
    { path: "*", element: <NoMatch /> }
  ]);
  return element;
}

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className='container'>
          <Routes />
        </div>

      </Router>
    </>
  );
}

export default App;
