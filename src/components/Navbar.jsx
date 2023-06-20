import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">          
          <Link to='/' className="navbar-brand" >Redux in action</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">                
                <Link to='/' className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/posts' className="nav-link" aria-current="page">Posts</Link>
              </li>
              <li className="nav-item">
                <Link to='/contact' className="nav-link" aria-current="page">Contact</Link>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </>

  )
}

export default Navbar

