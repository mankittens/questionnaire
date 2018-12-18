import { map } from 'lodash'
import React from 'react'
import Link from 'redux-first-router-link'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 420px;
  padding: 24px;
  text-align: left;
`

function RenderResp(props) {
  return (
    <Wrapper>
      <h3>
        <Link
          to={{
            type: 'VIEW_RESPONSE',
            payload: { id: props._id },
          }}
        >
          {props._id}
        </Link>
      </h3>
      <ul>
        <li>at: {props.at}</li>
        <li>name: {props.by.name}</li>
        <li>email: {props.by.email}</li>
        <li>
          for:{' '}
          <Link
            to={{
              type: 'TAKE_QUESTIONNAIRE',
              payload: { id: props.for },
            }}
          >
            {props.for}
          </Link>
        </li>
        {map(props.sections, (section, sectionIndex) =>
          map(section.answers, (answer, answerIndex) => {
            const index = `section_${sectionIndex}_answer_${answerIndex}`

            return (
              <li key={index}>
                {index}: {`${answer.answer}`}
              </li>
            )
          })
        )}
      </ul>
    </Wrapper>
  )
}

export default RenderResp
