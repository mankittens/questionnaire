import React from 'react'
import styled from 'styled-components'
import CreateQnrForm from './CreateQnrForm'

const Div = styled.div`
  padding: 24px;
  text-align: center;
`
const P = styled.p`
  margin: 0 auto;
  max-width: 480px;
`

function CreateQnr() {
  return (
    <Div>
      <header>
        <h1>
          <span role="img" aria-label="thinking face">
            🤔
          </span>
        </h1>
      </header>
      <section>
        <h2>Create Questionnaire</h2>
        <P>
          Paste your JSON-formatted questionnaire below. When you hit SUBMIT,
          you'll receive a URL which respondents can access to take your
          questionnaire.
        </P>
        <CreateQnrForm />
      </section>
    </Div>
  )
}

export default CreateQnr
