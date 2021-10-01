import { render, screen } from '@testing-library/react'
import Cards from './Cards'

test('loads item', () => {
  render(<Cards />)
  const mainItem = screen.getByRole('main')
  expect(mainItem).toBeInTheDocument()

  const textItems = screen.getAllByRole('heading')
  expect(textItems).toHaveLength(3)
})
