import React from 'react'
import { useQuery } from 'react-apollo'
import RepoList from './RepoList'
import { PROFILE_QUERY } from '../config/queries'

const Profile = () => {
  const { data, loading, error } = useQuery(PROFILE_QUERY)

  if (error) {
    return (
      <p className='bg-danger text-white font-weight-bold text-center py-1'>
        {error.message}
      </p>
    )
  }
  return (
    <div className='container my-3'>
      <div className='row'>
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
          <div className='col-md-4'>
            <div className='text-center'>
              <img
                src={data.viewer.avatarUrl}
                alt={data.viewer.name}
                className='img-fluid rounded-circle w-75'
              />
            </div>
            <br />
            <div className='d-flex justify-content-between align-items-center'>
              <h4 className='mb-0'>Hello {data.viewer.name}!</h4>
              <a
                href={data.viewer.url}
                className='btn btn-outline-info'
                target='_blank'
                rel='noreferrer'
              >
                <i className='bi bi-github'></i>
              </a>
            </div>
            <hr />
          </div>
        )}
        <div className='col-md-8'>
          <RepoList />
        </div>
      </div>
    </div>
  )
}

export default Profile
