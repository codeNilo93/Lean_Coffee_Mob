import Card from '../Card/Card'
import styled from 'styled-components/macro'

import { nanoid } from 'nanoid'

const Cards = () => {
  console.log('cards')
  const sampleCards = [
    { text: 'What is node?', author: 'Stefan Bering' },
    { text: 'What is React?', author: ' Timur Buchberger' },
    { text: 'What is styled components?', author: ' Danilo Bräuer' },
  ]

  return (
    <StyledMain>
      {sampleCards.map(card => {
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
  }
`

export default Cards
