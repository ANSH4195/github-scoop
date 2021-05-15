import React from 'react'

const Alert = ({ error }) => {
  return (
    <p className='bg-danger text-white font-weight-bold text-center py-1'>
      {error.message}
    </p>
  )
}

export default Alert
