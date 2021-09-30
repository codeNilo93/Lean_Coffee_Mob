import { useState } from 'react'
import styled from 'styled-components/macro'
import Card from '../Card/Card'

import { nanoid } from 'nanoid'

const sampleCards = [
  { text: 'What is node?', author: 'Stefan Bering' },
  { text: 'What is React?', author: ' Timur Buchberger' },
  { text: 'What is styled components?', author: ' Danilo Bräuer' },
  { text: 'What is node?', author: 'Stefan Bering' },
  { text: 'What is React?', author: ' Timur Buchberger' },
  { text: 'What is styled components?', author: ' Danilo Bräuer' },
  { text: 'What is node?', author: 'Stefan Bering' },
  { text: 'What is React?', author: ' Timur Buchberger' },
  { text: 'What is styled999 components?', author: ' Danilo Bräuer' },
]

const Cards = () => {
  const [data, setData] = useState(sampleCards)

  return (
    <StyledMain>
      {data.map(card => {
        console.log(card)
        return <Card text={card.text} author={card.author} key={nanoid()} />
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
