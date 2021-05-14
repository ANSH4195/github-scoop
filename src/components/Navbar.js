import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ history }) => {
  const logoutHandler = () => {
    sessionStorage.removeItem('token')
    history.push('/')
  }

  return (
    <nav className='navbar navbar-primary bg-dark'>
      <div className='container'>
        <Link className='navbar-brand text-white' to='/homepage'>
          <i className='bi bi-option'></i> GitHub Scoop
        </Link>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <button className='btn btn-danger' onClick={logoutHandler}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
