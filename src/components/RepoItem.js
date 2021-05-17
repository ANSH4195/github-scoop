import React from 'react'
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

const RepoItem = ({ repo }) => {
  return (
    <>
      <div key={repo.name} className='row align-items-center'>
        <div className='col-10'>
          <Link to={`/details/${repo.name}`} className='text-info'>
            <h3 className='grow'>{repo.name}</h3>
          </Link>
          Created At: <Moment format='DD/MM/YYYY'>{repo.createdAt}</Moment>
        </div>
        <div className='col-2'>
          <div className='d-grid'>
            <a
              href={repo.url}
              target='_blank'
              rel='noreferrer'
              className='btn btn-outline-info'
            >
              <i className='bi bi-github'></i>
            </a>
          </div>
        </div>
      </div>
      <hr />
    </>
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
