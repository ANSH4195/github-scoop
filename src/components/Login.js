import React, { useEffect } from 'react'

const Login = ({ history }) => {
  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      history.replace('/homepage')
    }
    // eslint-disable-next-line
  }, [])

  return (
    <div className='mt-5 pt-5 text-center'>
      <h1>
        <strong>Welcome to GitHub Scoop!</strong>
      </h1>
      <br />
      <br />
      <a
        href={`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CID}&scope=user%20repo&redirect_uri=${process.env.REACT_APP_REDIRECT}`}
        className='btn btn-primary btn-lg'
      >
        <i className='bi bi-github'></i> Login with GitHub
      </a>
    </div>
  )
}

export default Login
