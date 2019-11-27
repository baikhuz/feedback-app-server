import axios from 'axios'
import { FETCH_USER } from './types'

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')

  dispatch({ type: FETCH_USER, payload: res.data })
}

export const handleToken = token => async dispatch => {
  // the post request below creates the stripe charge object,
  // updates the user's credits, and saves the info in the mongoose model
  const res = await axios.post('/api/stripe', token)

  dispatch({ type: FETCH_USER, payload: res.data })
}
