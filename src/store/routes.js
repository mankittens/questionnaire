import { get } from 'lodash'
import { readResp, readRespsFor } from './resp'
import { readQnr } from './qnr'

function passLocationParamToAction(key, action) {
  return (dispatch, getState) => {
    const state = getState()
    const value = get(state, `location.payload.${key}`)
    dispatch(action(value))
  }
}

export default {
  HOME: '/',
  CREATE_QUESTIONNAIRE_SUCCESS: '/create-questionnaire/success/:id',
  TAKE_QUESTIONNAIRE: {
    path: '/take-questionnaire/:id',
    thunk: passLocationParamToAction('id', readQnr),
  },
  TAKE_QUESTIONNAIRE_SUCCESS: '/take-questionnaire/success/:id',
  VIEW_QUESTIONNAIRE: {
    path: '/questionnaire/:id',
    thunk: (...args) => {
      passLocationParamToAction('id', readRespsFor)(...args)
      passLocationParamToAction('id', readQnr)(...args)
    },
  },
  VIEW_RESPONSE: {
    path: '/response/:id',
    thunk: passLocationParamToAction('id', readResp),
  },
}
