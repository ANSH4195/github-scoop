import { Environment, Network, RecordSource, Store } from 'relay-runtime'
import fetchData from './fetchData'

async function fetchRelay(params, variables) {
  return fetchData(params.text, variables)
}

export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource())
})
