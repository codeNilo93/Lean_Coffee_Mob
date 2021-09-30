import { render, screen } from '@testing-library/react'
import Card from '../Card/Card'

test('loads item', () => {
  const sampleCards = [
    { text: 'What is node?', author: 'Stefan Bering' },
    { text: 'What is React?', author: ' Timur Buchberger' },
    { text: 'What is styled components?', author: ' Danilo Bräuer' },
  ]

  render(
    <main>
      {sampleCards.map(card => {
        return (
          <Card
            text={card.text.trim()}
            author={card.author.trim()}
            key={card.text.trim()}
          />
        )
      })}
    </main>
  )

  for (let sample of sampleCards) {
    const itemText = screen.getByText(sample.text.trim())
    expect(itemText).toBeInTheDocument()
    const authorText = screen.getByText(sample.author.trim())
    expect(authorText).toBeInTheDocument()
  }
})
