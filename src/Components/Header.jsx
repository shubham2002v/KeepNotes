import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>

  <div className="tab-content" id="nav-tabContent">
  </div>

<nav className="navbar navbar-expand-lg bg-black" data-bs-theme="dark">
<div className="container-fluid">


  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/Home" className="nav-link active" aria-current="page">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/About" className="nav-link active" aria-current="page">About</Link>
      </li>
      <li className="nav-item">
        <Link to="/Contact" className="nav-link active" aria-current="page">Contact</Link>
      </li>
    </ul>
  </div>
</div>
</nav>
    </> 


  
  )
}

export default Header