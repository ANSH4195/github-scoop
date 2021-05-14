import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Details from './components/Details'
import Homepage from './components/Homepage'
import { ApolloProvider } from 'react-apollo'
import client from './config/apolloClient'

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/details/:name' component={Details} />
          <Route path='/homepage' component={Homepage} />
        </Switch>
      </Router>
    </ApolloProvider>
  )
}

export default App
