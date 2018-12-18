import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import TakeQnrForm from './TakeQnrForm'

const Div = styled.div`
  padding: 24px;
  text-align: center;
`
const P = styled.p`
  margin: 12px auto;
  max-width: 480px;
`

function TakeQnr({ id, status }) {
  return (
    <Div>
      <header>
        <h1>
          <span role="img" aria-label="memo">
            📝
          </span>
        </h1>
      </header>
      <section>
        <h2>Take Questionnaire</h2>
        <P>
          Please fill out the questionnaire below and click SUBMIT when you are
          done. Your responses will be saved locally up as you work.
        </P>
        {status === 'SUCCESS' && <TakeQnrForm />}
      </section>
    </Div>
  )
}

const mapStateToProps = ({
  location: {
    payload: { id },
  },
  qnr: { status },
}) => ({ id, status })

export default connect(mapStateToProps)(TakeQnr)
