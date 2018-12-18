import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import RenderResp from './RenderResp'

const Div = styled.div`
  padding: 24px;
  text-align: center;
`

function ViewResp({ payload, status }) {
  return (
    <Div>
      <header>
        <h1>
          <span role="img" aria-label="memo">
            🕵️📝
          </span>
        </h1>
      </header>
      <section>
        <h2>Response</h2>
        {status === 'SUCCESS' && <RenderResp {...payload} />}
      </section>
    </Div>
  )
}

const mapStateToProps = ({ resp: { payload, status } }) => ({ payload, status })

export default connect(mapStateToProps)(ViewResp)
