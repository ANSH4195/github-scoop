import { Environment, Network, RecordSource, Store } from 'relay-runtime'
import fetchData from './fetchData'

// Relay passes a "params" object with the query name and text. So we define a helper function
// to call our fetchData utility with params.text.
async function fetchRelay(params, variables) {
  return fetchData(params.text, variables)
}

// Export a singleton instance of Relay Environment configured with our network function:
export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource())
})
