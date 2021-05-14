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
        ownerAffiliations: [OWNER]
        after: $after
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        nodes {
          name
          description
          createdAt
          url
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`

export const REPO_DETAILS_QUERY = gql`
  query repoDetails($name: String!) {
    viewer {
      repository(name: $name) {
        id
        name
        description
        collaborators(first: 5) {
          nodes {
            name
            url
            avatarUrl
          }
        }
        url
        createdAt
      }
    }
  }
`
