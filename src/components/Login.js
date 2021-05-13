import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Login = ({ location }) => {
  const [loading, setLoading] = useState(false)
  const [token, setToken] = useState('')

  useEffect(() => {
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
        console.log(data.token ? 'Yes' : 'No')
        console.log(data.token)
        setLoading(false)
      }
      getToken()
    }
    // eslint-disable-next-line
  }, [location.search])

  return (
    <div>
      Welcome to GitHub Scoop!
      <br />
      <br />
      {loading && <div>Loading...</div>}
      {token && <div>Token generated: {token}</div>}
      {!token && (
        <>
          <a
            href={`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CID}&scope=user&redirect_uri=${process.env.REACT_APP_REDIRECT}`}
          >
            Login
          </a>{' '}
          with your GitHub account.
        </>
      )}
    </div>
  )
}

export default Login
