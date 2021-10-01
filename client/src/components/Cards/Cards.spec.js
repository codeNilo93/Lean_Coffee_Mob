import { render, screen } from '@testing-library/react'
import Cards from './Cards'

const testCards = [
  { text: 'What is node?', author: 'Stefan Bering', id: 123 },
  { text: 'What is React?', author: ' Timur Buchberger', id: 124 },
  { text: 'What is styled components?', author: ' Danilo Bräuer', id: 125 },
]

test('loads item', () => {
  render(<Cards data={testCards} />)
  const mainItem = screen.getByRole('main')
  expect(mainItem).toBeInTheDocument()

  const textItems = screen.getAllByRole('heading')
  expect(textItems).toHaveLength(3)
})
