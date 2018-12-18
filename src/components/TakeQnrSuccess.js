import React from 'react'
import { connect } from 'react-redux'
import Link from 'redux-first-router-link'
import styled from 'styled-components'

const Div = styled.div`
  padding: 24px;
  text-align: center;
`
const P = styled.p`
  margin: 12px auto;
  max-width: 480px;
`

function TakeQnrSuccess({ id, status }) {
  return (
    <Div>
      <header>
        <h1>
          <span role="img" aria-label="success">
            🎊✅🎊
          </span>
        </h1>
      </header>
      <section>
        <h2>Questionnaire Completed!</h2>
        <P>Congratulations on completing the questionnaire!</P>
        <P>
          You can view your response{' '}
          <Link to={{ type: 'VIEW_RESPONSE', payload: { id } }}>here</Link>.
        </P>
      </section>
    </Div>
  )
}

const mapStateToProps = ({
  location: {
    payload: { id },
  },
}) => ({ id })

export default connect(mapStateToProps)(TakeQnrSuccess)
