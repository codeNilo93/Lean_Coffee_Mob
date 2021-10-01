import styled from 'styled-components/macro'

const Card = ({ id, text, author, onDeleteQuestion }) => {
  const deleteQuestionHandler = () => {
    onDeleteQuestion(id)
  }

  return (
    <StyledSection>
      <StyledButton onClick={deleteQuestionHandler}>
        Fuck this shit
      </StyledButton>
      <h2>{text}</h2>
      <p>{author}</p>
    </StyledSection>
  )
}

const StyledButton = styled.button`
  background: #f44336;
  color: #fff;
  border: 1px solid #000;
  border-radius: 25px;
`

const StyledSection = styled.section`
  width: 320px;
  padding: 1rem;
  border: 1px solid red;
  margin: 2rem;
  border-radius: 1rem;
  height: fit-content;
`
export default Card
