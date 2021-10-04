import styled from 'styled-components/macro'
import Cards from './components/Cards/Cards'
import Form from './components/Form/Form'
import localStorageInit from './components/LocalStorage/LocalStorageInit'
import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import LoginForm from './components/LoginForm/LoginForm'
import getCards from './services/GetCards'

function App() {
  const [data, setData] = useState([])
  const [user, setUser] = useState('')

  useEffect(() => {
    getCards()
      .then(cards => console.log(cards))
      .catch(error => console.error(error))
  }, [])

  const addQuestionHandler = question => {
    const newData = [...data, { text: question, author: user, id: nanoid() }]
    //localStorage.setItem('data', JSON.stringify(newData))
    setData(newData)
    setUser(user)
  }

  const deleteQuestionHandler = id => {
    const newData = data.filter(card => card.id !== id)
    //localStorage.setItem('data', JSON.stringify(newData))
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
