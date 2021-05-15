import React from 'react'

const Loader = ({ type }) => {
  if (type === 'sm') {
    return (
      <div
        className='spinner-border text-white'
        role='status'
        style={{
          width: '20px',
          height: '20px',
          margin: 'auto',
          display: 'block'
        }}
      >
        <span className='visually-hidden'>Loading...</span>
      </div>
    )
  }

  return (
    <div
      className='spinner-grow text-white'
      role='status'
      style={{
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'block',
        marginTop: '3rem'
      }}
    >
      <span className='visually-hidden'>Loading...</span>
    </div>
  )
}

export default Loader
