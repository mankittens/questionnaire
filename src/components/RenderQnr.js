import { map } from 'lodash'
import React from 'react'
import Link from 'redux-first-router-link'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 420px;
  padding: 24px;
  text-align: left;

  ul {
    padding-left: 24px;
  }

  ul ul {
    padding-left: 24px;
  }
`

function RenderQnr(props) {
  return (
    <Wrapper>
      <h3>
        <Link
          to={{
            type: 'VIEW_QUESTIONNAIRE',
            payload: { id: props._id },
          }}
        >
          {props._id}
        </Link>
      </h3>
      <p>
        <Link
          to={{
            type: 'TAKE_QUESTIONNAIRE',
            payload: { id: props._id },
          }}
        >
          (link to take this questionnaire)
        </Link>
      </p>
      <p>displayName: {props.displayName}</p>
      <h4>sections</h4>
      <ol>
        {map(props.sections, (section, index) => (
          <li key={index}>
            <ul>
              <li>displayName: {section.displayName}</li>
              <li>questions:</li>
              <ol>
                {map(section.questions, (question, index) => (
                  <li key={index}>
                    <ul>
                      <li>type: {question.type}</li>
                      <li>text: {question.text}</li>
                      <li>options:</li>
                      <ul>
                        {map(question.options, (option, index) => (
                          <li key={index}>
                            option_{index}: {option.text}
                          </li>
                        ))}
                      </ul>
                    </ul>
                  </li>
                ))}
              </ol>
            </ul>
          </li>
        ))}
      </ol>
    </Wrapper>
  )
}

export default RenderQnr
