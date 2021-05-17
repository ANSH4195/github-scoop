import React from 'react'
import { Route } from 'react-router-dom'
import Navbar from './Navbar'
import Profile from './Profile'
import Loader from './helpers/Loader'
import { QueryRenderer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import RelayEnvironment from '../config/RelayEnvironment'
import Alert from './helpers/Alert'

const HomepageQuery = graphql`
  query HomepageQuery($count: Int!, $after: String) {
    viewer {
      ...Profile_viewer
    }
  }
`

const Homepage = () => {
  return (
    <>
      <Route render={({ history }) => <Navbar history={history} />} />
      <QueryRenderer
        environment={RelayEnvironment}
        query={HomepageQuery}
        variables={{
          count: 5
        }}
        render={({ error, props }) => {
          if (error) {
            return <Alert error={error.message} />
          } else if (props) {
            return <Profile viewer={props.viewer} />
          }
          return <Loader />
        }}
      />
    </>
  )
}

export default Homepage
