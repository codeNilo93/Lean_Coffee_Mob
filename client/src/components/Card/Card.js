import styled from 'styled-components/macro'

const Card = ({ text, author }) => {
  return (
    <StyledSection>
      <h2>{text}</h2>
      <p>{author}</p>
    </StyledSection>
  )
}
const StyledSection = styled.section`
  width: 320px;
  padding: 1rem;
  border: 1px solid red;
  margin: 2rem;
  border-radius: 1rem;
`
export default Card
