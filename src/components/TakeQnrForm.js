import { Formik, Form, Field } from 'formik'
import { Persist } from 'formik-persist'
import { get, map } from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import * as Yup from 'yup'
import styled from 'styled-components'
import { createResp } from '../store/resp'

const Wrapper = styled.div`
  margin: 24px auto;
  max-width: 420px;
  padding: 24px;
  text-align: center;

  h3 {
    margin: 32px 0 0;
  }

  h4 {
    margin: 24px 0 0;
    text-align: left;
  }

  li {
    margin: 0 0 12px;
    text-align: left;
  }

  label {
    display: inline-block;
    margin: 12px 0;
    width: 100%;
  }

  textarea {
    height: 200px;
    width: 100%;
  }

  button[type='submit'] {
    margin-top: 24px;
  }
`

function TakeQnrForm({ onSubmit, payload }) {
  return (
    <Wrapper>
      <Formik
        initialValues={{
          by: {
            email: '',
            name: '',
          },
          sections: map(payload.sections, section => ({
            answers: map(section.questions, question => ({
              answer: question.type === 'multi' ? -1 : '',
            })),
          })),
        }}
        onSubmit={(values, { setSubmitting }) =>
          onSubmit({ ...values, ...{ for: payload._id } }, setSubmitting)
        }
        validationSchema={Yup.object().shape({})}
      >
        {({ values, errors, isSubmitting }) => (
          <Form>
            <h3>{payload.displayName}</h3>
            {map(payload.sections, (s, sectionIndex) => (
              <section key={s._id}>
                <h4>{s.displayName}</h4>
                <ul>
                  {map(s.questions, (q, answerIndex) => {
                    const id = `sections[${sectionIndex}].answers[${answerIndex}].answer`
                    const value = get(values, id)

                    return (
                      <li key={q._id}>
                        <label htmlFor={id}>{q.text}</label>
                        {q.type === 'multi' ? (
                          <Field
                            id={id}
                            name={id}
                            component="select"
                            value={value}
                          >
                            <option value={-1}>-- select an option --</option>
                            {map(q.options, (o, optionIndex) => (
                              <option key={o._id} value={optionIndex}>
                                {o.text}
                              </option>
                            ))}
                          </Field>
                        ) : (
                          <Field
                            id={id}
                            name={id}
                            component="textarea"
                            value={value}
                          />
                        )}
                      </li>
                    )
                  })}
                </ul>
              </section>
            ))}
            <h3>Your Information</h3>
            <ul>
              <li>
                <label htmlFor="by.name">Name</label>
                <Field
                  type="text"
                  id="by.name"
                  name="by.name"
                  value={values.by.name}
                />
              </li>
              <li>
                <label htmlFor="by.email">Email</label>
                <Field
                  type="email"
                  id="by.email"
                  name="by.email"
                  value={values.by.email}
                />
              </li>
            </ul>
            <button type="submit">Submit</button>
            <Persist name={`questionnaire-response-${payload._id}`} />
          </Form>
        )}
      </Formik>
    </Wrapper>
  )
}

const mapStateToProps = ({ qnr: { payload } }) => ({ payload })

const mapDispatchToProps = {
  onSubmit: createResp,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TakeQnrForm)
