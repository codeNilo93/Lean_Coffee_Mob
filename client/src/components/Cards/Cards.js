import styled from 'styled-components/macro'
import Card from '../Card/Card'

const Cards = ({ data, onDeleteQuestion }) => {
  return (
    <StyledMain>
      {data.map(card => {
        console.log(card)
        console.log(card._id)
        return (
          <Card
            id={card._id}
            text={card.text}
            author={card.author}
            key={card._id}
            onDeleteQuestion={onDeleteQuestion}
          />
        )
      })}
    </StyledMain>
  )
}

const StyledMain = styled.main`
  grid-column: 1 / 2;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 760px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export default Cards
