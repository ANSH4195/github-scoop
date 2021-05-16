import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Homepage from './components/Homepage'
import PrivateRoute from './components/helpers/PrivateRoute'
import NotFound from './components/NotFound'
import Details from './components/Details'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <PrivateRoute path='/homepage' component={Homepage} />
        <PrivateRoute path='/details/:name' component={Details} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
