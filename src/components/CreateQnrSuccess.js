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

function TakeQnrSuccess({ id }) {
  return (
    <Div>
      <header>
        <h1>
          <span role="img" aria-label="success">
            🎊😃🎊
          </span>
        </h1>
      </header>
      <section>
        <h2>Questionnaire Created!</h2>
        <P>
          Respondents can access your questionnaire{' '}
          <Link to={{ type: 'TAKE_QUESTIONNAIRE', payload: { id } }}>here</Link>
          .
        </P>
        <P>
          You can view responses to your questionnaire{' '}
          <Link to={{ type: 'VIEW_QUESTIONNAIRE', payload: { id } }}>here</Link>
          .
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
