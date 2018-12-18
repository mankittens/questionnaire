import React from 'react'
import { connect } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'
import { createQnr } from '../store/qnr'

const Wrapper = styled.div`
  margin: 24px auto;
  max-width: 420px;
  padding: 24px;
  text-align: center;

  textarea {
    height: 200px;
    width: 100%;
  }
`

const SubmitWrapper = styled.div`
  margin-top: 32px;
  position: relative;
`

const Msg = styled.span`
  left: 0;
  line-height: 1;
  position: absolute;
  width: 100%;
  top: -24px;
`

function isValidJsonString(x) {
  try {
    JSON.parse(x)
  } catch {
    return false
  }
  return true
}

function CreateQnrForm({ onSubmit }) {
  return (
    <Wrapper>
      <Formik
        initialValues={{ json: '' }}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit(JSON.parse(values.json), setSubmitting)
        }}
        validationSchema={Yup.object().shape({
          // TODO: Validate the JSON object schema here.
          json: Yup.mixed().test({
            message: 'Invalid JSON',
            name: 'isValidJsonString',
            test: isValidJsonString,
          }),
        })}
      >
        {({ values, errors, isSubmitting }) => (
          <Form>
            <Field
              component="textarea"
              name="json"
              placeholder="Paste JSON here."
              value={values.json}
            />
            <SubmitWrapper>
              {!values.json ? (
                <Msg>Please enter a value</Msg>
              ) : errors.json ? (
                <Msg>{errors.json}</Msg>
              ) : (
                <Msg>
                  Click it{' '}
                  <span role="img" aria-label="down error">
                    ⬇️
                  </span>
                </Msg>
              )}
              <button
                type="submit"
                disabled={!values.json || errors.json || isSubmitting}
              >
                Submit
              </button>
            </SubmitWrapper>
          </Form>
        )}
      </Formik>
    </Wrapper>
  )
}

const mapDispatchToProps = {
  onSubmit: createQnr,
}

export default connect(
  null,
  mapDispatchToProps
)(CreateQnrForm)
