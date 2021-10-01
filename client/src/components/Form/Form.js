import styled from 'styled-components/macro'

const Form = () => {
    return (
        <StyledForm>
            <StyledLabel htmlFor='newText'>Question</StyledLabel>
            <StyledInput type="text" name="newText" placeholder="placeholder"/>
            <button type="button">Save</button>
        </StyledForm>

    )
}

const StyledForm = styled.form`
  width: 90vw;
  margin: 0.25rem;
  border-radius: 1rem;
  display:flex;
  flex-direction: row;
  gap: 10%;
  justify-content: center;

`
const StyledInput = styled.input`
background: light-grey;
border-radius: 1rem;
width: 90%;
`

const StyledLabel = styled.label`
visibility: hidden;
`

export default Form