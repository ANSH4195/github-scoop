import React from 'react'
import { Route } from 'react-router-dom'
import Navbar from './Navbar'
import Profile from './Profile'

const Homepage = () => {
  return (
    <>
      <Route render={({ history }) => <Navbar history={history} />} />
      <Profile />
    </>
  )
}

export default Homepage
