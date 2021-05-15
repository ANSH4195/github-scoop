import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = ({ history }) => {
  return (
    <div className='mt-5 pt-5 text-center'>
      <h1 className='display-2 bg-danger py-3'>
        <strong>404! Page not found</strong>
      </h1>
      <Link to='/homepage' className='btn btn-primary btn-lg'>
        Go Home
      </Link>
    </div>
  )
}

export default NotFound
