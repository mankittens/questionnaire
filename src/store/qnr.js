import { createAction, handleActions } from 'redux-actions'
import { push } from 'redux-first-router'

export const qnrPending = createAction('QNR_PENDING')
export const qnrSuccess = createAction('QNR_SUCCESS')
export const qnrFailure = createAction('QNR_FAILURE')

export function createQnr(payload, callback) {
  return async function(dispatch) {
    dispatch(qnrPending())
    const response = await fetch('http://localhost:3001/questionnaire', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    if (response.status === 200) {
      const json = await response.json()
      dispatch(qnrSuccess(json))

      const id = json._id
      push(`/create-questionnaire/success/${id}`)
    } else {
      dispatch(qnrFailure())
    }
    callback()
  }
}

export function readQnr(id) {
  return async function(dispatch) {
    dispatch(qnrPending())
    const response = await fetch(`http://localhost:3001/questionnaire/${id}`)
    if (response.status === 200) {
      const json = await response.json()
      dispatch(qnrSuccess(json))
    } else {
      dispatch(qnrFailure())
    }
  }
}

export const reducer = handleActions(
  {
    QNR_PENDING: () => ({ status: 'PENDING' }),
    QNR_SUCCESS: (state, { payload }) => ({ status: 'SUCCESS', payload }),
    QNR_FAILURE: () => ({ status: 'FAILURE' }),
  },
  {}
)
