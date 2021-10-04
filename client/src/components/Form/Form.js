import styled from 'styled-components/macro'
import { useState } from 'react'

const Form = ({ onAddQuestion }) => {
  const [question, setQuestion] = useState('')

  const changeQuestionHandler = event => {
    setQuestion(event.target.value)
  }

  const submitForm = event => {
    event.preventDefault()
    document.getElementById('create-question-form').reset()
    onAddQuestion(question)
  }

  return (
    <StyledForm onSubmit={submitForm} id="create-question-form">
      <StyledLabel htmlFor="newQuestion">Question</StyledLabel>
      <StyledInput
        type="text"
        id="newQuestion"
        name="newQuestion"
        placeholder="Please enter your question"
        onChange={event => changeQuestionHandler(event)}
      />
      <StyledButton>Save</StyledButton>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  grid-column: 2 / -1;
  margin: 0.25rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const StyledInput = styled.input`
  background: light-grey;
  border-radius: 1rem;
  width: 100%;
`

const StyledLabel = styled.label`
  visibility: hidden;
  width: 0px;
`

const StyledButton = styled.button`
  background: #008cba;
  color: #fff;
  border: 1px solid #000;
  border-radius: 25px;
`

export default Form
