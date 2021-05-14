import gql from 'graphql-tag'

export const PROFILE_QUERY = gql`
  query userProfile {
    viewer {
      name
      url
      avatarUrl
    }
  }
`

export const REPOS_QUERY = gql`
  query userRepos($after: String) {
    viewer {
      repositories(
        first: 5
        after: $after
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        nodes {
          id
          name
          description
          createdAt
          url
          languages(first: 3) {
            nodes {
              color
              name
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`
