import React from 'react'
import { connect } from 'react-redux'

import CreateQnr from './CreateQnr'
import CreateQnrSuccess from './CreateQnrSuccess'
import NotFound from './NotFound'
import TakeQnrSuccess from './TakeQnrSuccess'
import TakeQnr from './TakeQnr'
import ViewResp from './ViewResp'
import ViewQnr from './ViewQnr'

const map = {
  HOME: CreateQnr,
  CREATE_QUESTIONNAIRE_SUCCESS: CreateQnrSuccess,
  TAKE_QUESTIONNAIRE: TakeQnr,
  TAKE_QUESTIONNAIRE_SUCCESS: TakeQnrSuccess,
  VIEW_RESPONSE: ViewResp,
  VIEW_QUESTIONNAIRE: ViewQnr,
}

function Pages({ page }) {
  const Component = map[page]
  return Component ? <Component /> : <NotFound />
}

const mapStateToProps = ({ location: { type } }) => ({ page: type })

export default connect(mapStateToProps)(Pages)
