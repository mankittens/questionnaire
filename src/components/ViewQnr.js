import { map } from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import RenderResp from './RenderResp'
import RenderQnr from './RenderQnr'

const Div = styled.div`
  padding: 24px;
  text-align: center;
`

function ViewQnr({ qnr, resp }) {
  return (
    <Div>
      <header>
        <h1>
          <span role="img" aria-label="memo">
            🕵️🤔
          </span>
        </h1>
      </header>
      <section>
        <h2>Questionnaire</h2>
        {qnr.status === 'SUCCESS' && <RenderQnr {...qnr.payload} />}
      </section>
      <section>
        <h2>Responses</h2>
        {resp.status === 'SUCCESS' &&
          map(resp.payload, x => <RenderResp key={x._id} {...x} />)}
      </section>
    </Div>
  )
}

const mapStateToProps = ({ qnr, resp }) => ({ qnr, resp })

export default connect(mapStateToProps)(ViewQnr)
