import React from 'react'
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

const RepoItem = ({ repo }) => {
  return (
    <div key={repo.name}>
      <div className='row align-items-center'>
        <div className='col-md-10'>
          <h3 className='text-info'>{repo.name}</h3>
          Created At: <Moment format='DD/MM/YYYY'>{repo.createdAt}</Moment>
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
            <Link to={`/details/${repo.name}`} className='btn btn-success'>
              Details
            </Link>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default createFragmentContainer(RepoItem, {
  repo: graphql`
    fragment RepoItem_repo on Repository {
      id
      name
      createdAt
      url
    }
  `
})
