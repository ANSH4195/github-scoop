import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const REPOSITORIES = gql`
  {
    viewer {
      name
      url
      avatarUrl
      repositories(last: 8) {
        nodes {
          name
          description
          url
          languages(first: 3) {
            nodes {
              color
              name
            }
          }
        }
      }
    }
  }
`

const Details = () => {
  return (
    <div>
      hello mr. Details
      <Query query={REPOSITORIES}>
        {({ data, loading }) =>
          loading ? (
            <div>Loading...</div>
          ) : (
            <div>
              {data.viewer.name}
              <br />
              {data.viewer.url}
              {data.viewer.repositories.nodes.map((repo) => {
                return (
                  <div key={repo.url}>
                    {repo.name} - <a href={repo.url}>Click here</a>
                  </div>
                )
              })}
            </div>
          )
        }
      </Query>
    </div>
  )
}

export default Details
