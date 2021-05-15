import React from 'react'
import { useQuery } from 'react-apollo'
import RepoList from './RepoList'
import { PROFILE_QUERY } from '../config/queries'
import Loader from './helpers/Loader'
import Alert from './helpers/Alert'

const Profile = () => {
  const { data, loading, error } = useQuery(PROFILE_QUERY)

  if (error) {
    return <Alert error={error} />
  }
  return (
    <div className='container my-3'>
      <div className='row'>
        {loading ? (
          <Loader />
        ) : (
          <div className='col-lg-4'>
            <div className='text-center'>
              <img
                src={data.viewer.avatarUrl}
                alt={data.viewer.name}
                className='img-fluid rounded-circle w-50'
              />
            </div>
            <br />
            <div className='d-flex justify-content-between align-items-center'>
              <h4 className='mb-0'>{data.viewer.name}</h4>
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
            <div className='d-table'>
              <h5 className='mb-0'>Bio: </h5>
              <div className='d-table-cell px-2'>
                <p className='lead mb-0'>{data.viewer.bio}</p>
              </div>
            </div>
            <hr />
            <div className='row'>
              <div className='col-6 text-center'>
                <h5 className='mb-0'>
                  <span className='badge bg-primary'>
                    Followers: {data.viewer.followers.totalCount}
                  </span>
                </h5>
              </div>
              <div className='col-6 text-center'>
                <h5 className='mb-0'>
                  <span className='badge bg-info'>
                    Following: {data.viewer.following.totalCount}
                  </span>
                </h5>
              </div>
              <div className='col-6 text-center mt-2'>
                <h5 className='mb-0'>
                  <span className='badge bg-success'>
                    Repositories: {data.viewer.repositories.totalCount}
                  </span>
                </h5>
              </div>
              <div className='col-6 text-center mt-2'>
                <h5 className='mb-0'>
                  <span className='badge bg-secondary'>
                    Gists: {data.viewer.gists.totalCount}
                  </span>
                </h5>
              </div>
            </div>
            <hr />
          </div>
        )}
        <div className='col-lg-8'>
          <RepoList />
        </div>
      </div>
    </div>
  )
}

export default Profile
