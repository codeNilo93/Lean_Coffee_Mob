import styled from 'styled-components/macro'
import Cards from './components/Cards/Cards'
import Form from './components/Form/Form'
import localStorageInit from './components/LocalStorage/LocalStorageInit'
import { useState } from 'react'
import { nanoid } from 'nanoid'

function App() {
  localStorageInit()
  const [data, setData] = useState(JSON.parse(localStorage.getItem('data')))
  const addQuestionHandler = question => {
    const newData = [...data, { text: question, author: 'user', id: nanoid() }]
    localStorage.setItem('data', JSON.stringify(newData))
    setData(newData)
  }

  return (
    <StyledDiv>
      <Cards data={data} />
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
