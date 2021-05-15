import React, { useEffect, useState } from 'react'
import { useQuery, useMutation } from 'react-apollo'
import Moment from 'react-moment'
import { Route } from 'react-router-dom'
import { REPO_DETAILS_QUERY, EDIT_REPO_MUTATION } from '../config/queries'
import Navbar from './Navbar'
import Loader from './helpers/Loader'
import Alert from './helpers/Alert'

const Details = ({ match, history }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const { data, loading, error } = useQuery(REPO_DETAILS_QUERY, {
    variables: { name: match.params.name }
  })

  const [
    updateRepo,
    { error: updateErr, loading: updateLoading }
  ] = useMutation(EDIT_REPO_MUTATION, {
    refetchQueries: ({ data }) => [
      {
        query: REPO_DETAILS_QUERY,
        variables: {
          name: data.updateRepository.repository.name
        }
      }
    ]
  })

  useEffect(() => {
    if (data && data.viewer.repository.name !== match.params.name) {
      history.replace(`/details/${data.viewer.repository.name}`)
    }
    // eslint-disable-next-line
  }, [data])

  useEffect(() => {
    setName('')
    setDescription('')
  }, [updateLoading])

  if (error) {
    return <Alert error={error} />
  }
  return (
    <>
      <Route render={({ history }) => <Navbar history={history} />} />
      {updateErr && <Alert error={updateErr} />}
      <div className='container my-3'>
        {loading ? (
          <Loader />
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
                <h2 className='text-center mb-0'>Repository Details</h2>
                <hr />
                <div className='row align-items-center'>
                  <div className='col-md-9'>
                    <h1 className='text-info'>{data.viewer.repository.name}</h1>
                  </div>
                  <div className='col-md-3 row mx-0 mt-2 mt-md-0 d-md-block'>
                    <div className='col-6 col-md-12 d-grid mb-md-1'>
                      <a
                        className='btn btn-outline-danger'
                        href={`${data.viewer.repository.url}/issues`}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Issues <i className='bi bi-box-arrow-up-right'></i>
                      </a>
                    </div>
                    <div className='col-6 col-md-12 d-grid'>
                      <a
                        className='btn btn-outline-info'
                        href={data.viewer.repository.url}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <i className='bi bi-github'></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='d-table mt-3'>
                  <div className='d-table-cell'>
                    <p className='lead mb-0'>Description:</p>
                  </div>
                  <div className='d-table-cell px-2'>
                    <p className='lead mb-0'>
                      <em>
                        <strong>
                          {data.viewer.repository.description ||
                            'No Description'}
                        </strong>
                      </em>
                    </p>
                  </div>
                </div>
                <hr />
                <h4 className='text-center'>Edit Repository</h4>
                <hr />
                <form className='row g-2 align-items-start'>
                  <div className='col-md-6'>
                    <div className='form-floating mb-2'>
                      <input
                        type='text'
                        className='form-control bg-black text-white'
                        placeholder='new-name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                      <label htmlFor='floatingInput'>New Name</label>
                    </div>
                  </div>

                  <div className='col-md-6'>
                    <div className='form-floating mb-2'>
                      <textarea
                        className='form-control bg-black text-white'
                        placeholder='Description'
                        style={{ minHeight: '100px' }}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                      <label htmlFor='floatingInput'>Description</label>
                    </div>
                  </div>

                  <div className='col-12 d-grid'>
                    <button
                      type='submit'
                      className='btn btn-primary'
                      onClick={(e) => {
                        e.preventDefault()
                        let variables = {
                          repositoryId: data.viewer.repository.id
                        }
                        if (name) {
                          variables.name = name
                        }
                        if (description) {
                          variables.description = description
                        }
                        updateRepo({ variables })
                      }}
                      disabled={updateLoading || (!name && !description)}
                    >
                      {updateLoading ? <Loader type='sm' /> : 'Submit'}
                    </button>
                  </div>
                </form>
                <hr />
                <p className='lead text-muted text-center text-md-end'>
                  <em>
                    Created At:{' '}
                    <Moment format='DD/MM/YYYY'>
                      {data.viewer.repository.createdAt}
                    </Moment>
                  </em>
                </p>
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
