import styled from 'styled-components/macro'
import Cards from './components/Cards/Cards'
import Form from './components/Form/Form'
import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import LoginForm from './components/LoginForm/LoginForm'
import getCards from './services/GetCards'
import pushCard from './services/PushCard'

function App() {
  const [cards, setCards] = useState([])
  const [user, setUser] = useState('')

  useEffect(() => {
    getCards()
      .then(data => setCards(data))
      .catch(error => console.error(error))
  }, [])

  const addQuestionHandler = question => {
    const newCard = { text: question, author: user, id: nanoid() }
    const newData = [...cards, newCard]
    pushCard(newCard)
      .then(res => res.json())
      .then(data => {
        setCards(newData)
        setUser(user)
      })
      .catch(error => console.error(error))
  }

  const deleteQuestionHandler = id => {
    const newData = cards.filter(card => card.id !== id)
    setCards(newData)
  }

  const addUserHandler = username => {
    localStorage.setItem('user', JSON.stringify(username))
    setUser(username)
  }

  return (
    <StyledDiv>
      {user ? (
        <Cards data={cards} onDeleteQuestion={deleteQuestionHandler} />
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
