import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Details from './components/Details'
import Homepage from './components/Homepage'
import PrivateRoute from './components/helpers/PrivateRoute'
import { ApolloProvider } from 'react-apollo'
import client from './config/apolloClient'
import NotFound from './components/NotFound'

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <PrivateRoute path='/homepage' component={Homepage} />
          <PrivateRoute path='/details/:name' component={Details} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ApolloProvider>
  )
}

export default App
