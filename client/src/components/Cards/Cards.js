import styled from 'styled-components/macro'
import Card from '../Card/Card'

const Cards = ({data}) => {
  return (
    <StyledMain>
      {data.map(card => {
        return <Card text={card.text} author={card.author} key={card.id} />
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
