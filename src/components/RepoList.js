import React from 'react'
import Moment from 'react-moment'
import { useQuery } from 'react-apollo'
import { REPOS_QUERY } from '../config/queries'
import { Waypoint } from 'react-waypoint'

const RepoList = () => {
  const { data, loading, error, fetchMore } = useQuery(REPOS_QUERY, {
    variables: { after: null },
    notifyOnNetworkStatusChange: true
  })

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
    return (
      <p className='bg-danger text-white font-weight-bold text-center py-1'>
        {error.message}
      </p>
    )
  }
  return !data ? (
    <div
      className='spinner-grow text-white'
      role='status'
      style={{
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'block',
        marginTop: '3rem'
      }}
    >
      <span className='visually-hidden'>Loading...</span>
    </div>
  ) : (
    <div>
      <h2 className='text-center'>Your Repositories</h2>
      <hr />
      {data.viewer.repositories.nodes.map((repo, index) => {
        return (
          <div key={repo.id}>
            <div className='row align-items-center'>
              <div className='col-md-10'>
                <h3 className='text-info'>{repo.name}</h3>
                <p className='lead'>
                  <em>{repo.description || 'No Description'}</em>
                </p>
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
                  <button className='btn btn-success'>Details</button>
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
      {loading && (
        <div
          className='spinner-border text-white'
          role='status'
          style={{
            width: '40px',
            height: '40px',
            margin: 'auto',
            display: 'block',
            marginTop: '0.5rem'
          }}
        >
          <span className='visually-hidden'>Loading...</span>
        </div>
      )}
    </div>
  )
}

export default RepoList
