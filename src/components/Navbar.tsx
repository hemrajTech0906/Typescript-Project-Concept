import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar:React.FC = () => {
  return (
    <div className='tbody'>

<nav className="navbar">
  <Link className="navbar-brand" to={"/home"}>HOME</Link>
  <div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to={"/counter"}>Counter</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={'/FunComp'}>FunComp</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={'/youtube'}>YouTube</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled" to={'/LOGIN'}>Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled" to={"/userlist"}>UserList</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled" to={'/home'}>Details</Link>
      </li>
      {/* '/Details/:id' */}
    </ul>
    
  </div>
</nav>

    </div>
  )
}

export default Navbar