import React, { useEffect } from 'react'
import Moment from 'react-moment'
import { useQuery } from 'react-apollo'
import { REPOS_QUERY } from '../config/queries'
import { Waypoint } from 'react-waypoint'
import { Link } from 'react-router-dom'
import Loader from './helpers/Loader'
import Alert from './helpers/Alert'

const RepoList = () => {
  const { data, loading, error, fetchMore, refetch } = useQuery(REPOS_QUERY, {
    notifyOnNetworkStatusChange: true
  })

  useEffect(() => {
    refetch()
    // eslint-disable-next-line
  }, [])

  const moreRepos = () => {
    const { endCursor } = data.viewer.repositories.pageInfo

    fetchMore({
      variables: { after: endCursor },
      updateQuery: (prevRepos, { fetchMoreResult }) => {
        fetchMoreResult.viewer.repositories.nodes = [
          ...prevRepos.viewer.repositories.nodes,
          ...fetchMoreResult.viewer.repositories.nodes
        ]
        return fetchMoreResult
      }
    })
  }

  if (error) {
    return <Alert error={error} />
  }
  return !data ? (
    <Loader />
  ) : (
    <div>
      <h2 className='text-center'>Your Repositories</h2>
      <hr />
      {data.viewer.repositories.nodes.map((repo, index) => {
        return (
          <div key={repo.name}>
            <div className='row align-items-center'>
              <div className='col-md-10'>
                <h3 className='text-info'>{repo.name}</h3>
                Created At:{' '}
                <Moment format='DD/MM/YYYY'>{repo.createdAt}</Moment>
              </div>
              <div className='col-md-2 mt-2 mt-md-0'>
                <div className='d-grid gap-2'>
                  <a
                    href={repo.url}
                    target='_blank'
                    rel='noreferrer'
                    className='btn btn-outline-info'
                  >
                    <i className='bi bi-github'></i>
                  </a>
                  <Link
                    to={`/details/${repo.name}`}
                    className='btn btn-success'
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
            <hr />
            {index === data.viewer.repositories.nodes.length - 2 &&
              data.viewer.repositories.pageInfo.hasNextPage && (
                <Waypoint onEnter={moreRepos} />
              )}
          </div>
        )
      })}
      {loading && <Loader type='sm' />}
    </div>
  )
}

export default RepoList
