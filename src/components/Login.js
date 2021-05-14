import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Login = ({ location, history }) => {
  const [loading, setLoading] = useState(false)
  const [token, setToken] = useState(sessionStorage.getItem('token'))

  useEffect(() => {
    console.log(token)
    const code =
      location.search.match(/\?code=(.*)/) &&
      location.search.match(/\?code=(.*)/)[1]
    if (code && !token) {
      async function getToken() {
        setLoading(true)
        const { data } = await axios.get(
          `http://localhost:9999/authenticate/${code}`
        )
        setToken(data.token)
        sessionStorage.setItem('token', data.token)
        setLoading(false)
        history.push('/homepage')
      }
      getToken()
    }
    // eslint-disable-next-line
  }, [location.search])

  return (
    <div className='mt-5 pt-5 text-center'>
      <h1>
        <strong>Welcome to GitHub Scoop!</strong>
      </h1>
      <br />
      <br />
      {loading ? (
        <button className='btn btn-primary btn-lg disabled'>
          <div className='spinner-border text-white' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        </button>
      ) : !token ? (
        <>
          <a
            href={`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CID}&scope=user&redirect_uri=${process.env.REACT_APP_REDIRECT}`}
            className='btn btn-primary btn-lg'
          >
            <i className='bi bi-github'></i> Login with GitHub
          </a>
        </>
      ) : (
        <button className='btn btn-primary btn-lg disabled'>Logged in</button>
      )}
    </div>
  )
}

export default Login
