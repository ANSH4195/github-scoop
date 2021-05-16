import React from 'react'
import RepoItem from './RepoItem'
import { Waypoint } from 'react-waypoint'
import { createPaginationContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import Loader from './helpers/Loader'

const RepoList = ({ repos, relay }) => {
  const _loadMore = () => {
    relay.loadMore(5)
  }

  return (
    <div>
      <h2 className='text-center'>Your Repositories</h2>
      <hr />
      {repos.repositories.edges.map((node, index) => {
        return (
          <div key={node.cursor}>
            <RepoItem repo={node.node} />
            {index === repos.repositories.edges.length - 2 &&
              repos.repositories.pageInfo.hasNextPage && (
                <Waypoint onEnter={_loadMore} />
              )}
          </div>
        )
      })}
      {relay.isLoading() && relay.hasMore() && <Loader type='sm' />}
    </div>
  )
}

export default createPaginationContainer(
  RepoList,
  {
    repos: graphql`
      fragment RepoList_repos on User {
        repositories(
          first: $count
          after: $after
          ownerAffiliations: [OWNER]
          orderBy: { field: CREATED_AT, direction: DESC }
        ) @connection(key: "RepoList_repositories", filters: []) {
          edges {
            node {
              ...RepoItem_repo
            }
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    `
  },
  {
    direction: 'forward',
    query: graphql`
      query RepoListForwardQuery($count: Int!, $after: String) {
        viewer {
          ...RepoList_repos
        }
      }
    `,
    getConnectionFromProps(props) {
      return props.repos && props.repos.repositories
    },
    getFragmentVariables(previousVariables, totalCount) {
      return {
        ...previousVariables,
        count: totalCount
      }
    },
    getVariables(props, paginationInfo, fragmentVariables) {
      return {
        count: paginationInfo.count,
        after: paginationInfo.cursor
      }
    }
  }
)
