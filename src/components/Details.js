import React from 'react'
import { useQuery } from 'react-apollo'
import { Route } from 'react-router-dom'
import { REPO_DETAILS_QUERY } from '../config/queries'
import Navbar from './Navbar'

const Details = ({ match, history }) => {
  const { data, loading, error } = useQuery(REPO_DETAILS_QUERY, {
    variables: { name: match.params.name }
  })

  if (error) {
    return (
      <p className='bg-danger text-white font-weight-bold text-center py-1'>
        {error.message}
      </p>
    )
  }
  return (
    <>
      <Route render={({ history }) => <Navbar history={history} />} />
      <div className='container my-3'>
        {loading ? (
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
          <>
            <button
              className='btn btn-outline-warning'
              onClick={() => history.goBack()}
            >
              <i className='bi bi-caret-left'></i> Back
            </button>
            <hr />
            <div className='row'>
              <div className='col-lg-8'>
                <div className='d-flex justify-content-between align-items-center'>
                  <h2 className='text-center mb-0'>Repository Details</h2>
                  <a
                    className='btn btn-outline-info'
                    href={data.viewer.repository.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    View on <i className='bi bi-github'></i>
                  </a>
                </div>
                <hr />
                someshit
                <hr />
              </div>
              <div className='col-lg-4'>
                <h2 className='text-center'>Collaborators</h2>
                <hr />
                {data.viewer.repository.collaborators.nodes.map((cb) => {
                  return (
                    <div
                      key={cb.url}
                      className='m-2 px-2 py-1 border border-secondary rounded d-flex justify-content-around align-items-center'
                    >
                      <img
                        src={cb.avatarUrl}
                        alt={cb.name}
                        className='img-fluid rounded-circle'
                        width='40px'
                        height='40px'
                      />
                      <p className='lead mb-0'>{cb.name}</p>
                      <a
                        className='btn btn-outline-info'
                        href={cb.url}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <i className='bi bi-github'></i>
                      </a>
                    </div>
                  )
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Details
