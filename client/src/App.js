import styled from 'styled-components/macro'
import Cards from './components/Cards/Cards'
import Form from './components/Form/Form'

function App() {
  const addQuestionHandler = question => {
    alert('Question: ' + question)
  }

  return (
    <StyledDiv>
      <Cards />
      <Form onAddQuestion={addQuestionHandler} />
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: grid;
  grid-template-rows: auto 40px;
  text-align: center;
  height: 100vh;
`

export default App
