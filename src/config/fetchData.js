async function fetchData(text, variables) {
  const TOKEN = sessionStorage.getItem('token')

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: text,
      variables
    })
  })

  return await response.json()
}

export default fetchData
