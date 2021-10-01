import styled from 'styled-components/macro'
import Cards from './components/Cards/Cards'
import Form from './components/Form/Form'
import localStorageInit from './components/LocalStorage/LocalStorageInit'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import LoginForm from './components/LoginForm/LoginForm'

function App() {
  localStorageInit()

  const [data, setData] = useState(JSON.parse(localStorage.getItem('data')))
  const [user, setUser] = useState('')

  const addQuestionHandler = question => {
    const newData = [...data, { text: question, author: user, id: nanoid() }]
    localStorage.setItem('data', JSON.stringify(newData))
    setData(newData)
  }

  const deleteQuestionHandler = id => {
    const newData = data.filter(card => card.id !== id)
    localStorage.setItem('data', JSON.stringify(newData))
    setData(newData)
  }

  const addUserHandler = username => {
    localStorage.setItem('user', JSON.stringify(username))
    setUser(username)
  }

  return (
    <StyledDiv>
      {user ? (
        <Cards data={data} onDeleteQuestion={deleteQuestionHandler} />
      ) : (
        <LoginForm onAddUser={addUserHandler} />
      )}
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
