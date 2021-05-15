import gql from 'graphql-tag'

export const PROFILE_QUERY = gql`
  query userProfile {
    viewer {
      name
      url
      avatarUrl
      bio
      followers {
        totalCount
      }
      following {
        totalCount
      }
      gists {
        totalCount
      }
      repositories {
        totalCount
      }
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

export const EDIT_REPO_MUTATION = gql`
  mutation updateRepo(
    $repositoryId: String!
    $name: String
    $description: String
  ) {
    updateRepository(
      input: {
        repositoryId: $repositoryId
        name: $name
        description: $description
      }
    ) {
      repository {
        name
      }
    }
  }
`
