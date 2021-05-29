import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from './helpers/Loader'

const Verify = ({ location, history }) => {
  const [loading, setLoading] = useState(false)
  const [token, setToken] = useState(sessionStorage.getItem('token'))

  useEffect(() => {
    if (token) {
      history.replace('/homepage')
    }
    const code =
      location.search.match(/\?code=(.*)/) &&
      location.search.match(/\?code=(.*)/)[1]
    if (code && !token) {
      async function getToken() {
        setLoading(true)

        const { data } = await axios.get(
          `https://gtoken.herokuapp.com/authenticate/${code}`
        )
        setToken(data.token)
        sessionStorage.setItem('token', data.token)
        setLoading(false)
        history.replace('/homepage')
      }
      getToken()
    }
    // eslint-disable-next-line
  }, [location.search])

  return (
    <>
      {loading ? (
        <>
          <Loader />
          <h4 className='text-center mt-5'>
            <em>
              Loading may take upto 30 seconds. (Heroku takes some time to load)
            </em>
          </h4>
        </>
      ) : (
        <button className='btn btn-primary btn-lg disabled'>Logged in</button>
      )}
    </>
  )
}

export default Verify
