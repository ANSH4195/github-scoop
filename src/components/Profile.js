import React from 'react'
import RepoList from './RepoList'
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const Profile = ({ viewer }) => {
  return (
    <div className='container my-3'>
      <div className='row'>
        <div className='col-lg-4'>
          <div className='text-center'>
            <img
              src={viewer.avatarUrl}
              alt={viewer.name}
              className='img-fluid rounded-circle w-50'
            />
          </div>
          <br />
          <div className='d-flex justify-content-between align-items-center'>
            <h4 className='mb-0'>{viewer.name}</h4>
            <a
              href={viewer.url}
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
              <p className='lead mb-0'>{viewer.bio}</p>
            </div>
          </div>
          <hr />
        </div>
        <div className='col-lg-8'>
          <RepoList repos={viewer} />
        </div>
      </div>
    </div>
  )
}

export default createFragmentContainer(Profile, {
  viewer: graphql`
    fragment Profile_viewer on User {
      name
      url
      avatarUrl
      bio
      ...RepoList_repos
    }
  `
})
