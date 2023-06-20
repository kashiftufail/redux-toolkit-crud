import './App.css';
import Posts from './components/Posts';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import PostLists from './components/PostLists';
import Post from './components/Post';

import { BrowserRouter as Router, Route, Link, useRoutes } from 'react-router-dom';

function Routes() {
  const element = useRoutes([
    { path: "/", element: <Home /> },
    
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


        <Routes />

      </Router>
    </>
  );
}

export default App;
