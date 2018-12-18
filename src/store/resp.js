import { createAction, handleActions } from 'redux-actions'
import { push } from 'redux-first-router'

export const respPending = createAction('RESP_PENDING')
export const respSuccess = createAction('RESP_SUCCESS')
export const respFailure = createAction('RESP_FAILURE')

export function createResp(payload, callback) {
  return async function(dispatch) {
    dispatch(respPending())
    const response = await fetch('http://localhost:3001/response', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    if (response.status === 200) {
      const json = await response.json()
      dispatch(respSuccess(json))

      const id = json._id
      push(`/take-questionnaire/success/${id}`)
    } else {
      dispatch(respFailure())
    }
    callback()
  }
}

export function readResp(id) {
  return async function(dispatch) {
    dispatch(respPending())
    const response = await fetch(`http://localhost:3001/response/${id}`)
    if (response.status === 200) {
      const json = await response.json()
      dispatch(respSuccess(json))
    } else {
      dispatch(respFailure())
    }
  }
}

export function readRespsFor(id) {
  return async function(dispatch) {
    dispatch(respPending())
    const response = await fetch(`http://localhost:3001/response/s/for/${id}`)
    if (response.status === 200) {
      const json = await response.json()
      dispatch(respSuccess(json))
    } else {
      dispatch(respFailure())
    }
  }
}

export const reducer = handleActions(
  {
    RESP_PENDING: () => ({ status: 'PENDING' }),
    RESP_SUCCESS: (state, { payload }) => ({ status: 'SUCCESS', payload }),
    RESP_FAILURE: () => ({ status: 'FAILURE' }),
  },
  {}
)
