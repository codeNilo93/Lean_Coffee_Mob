import { useState } from 'react'
import styled from 'styled-components/macro'
import Card from '../Card/Card'

const sampleCards = [
  { text: 'What is node?', author: 'Stefan Bering', id: 123 },
  { text: 'What is React?', author: ' Timur Buchberger', id: 124 },
  { text: 'What is styled components?', author: ' Danilo Bräuer', id: 125 },
]

const Cards = () => {
  const [data, setData] = useState(sampleCards)

  return (
    <StyledMain>
      {data.map(card => {
        return <Card text={card.text} author={card.author} key={card.id} />
      })}
    </StyledMain>
  )
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 760px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export default Cards
