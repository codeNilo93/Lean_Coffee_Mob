import { render, screen } from '@testing-library/react'
import Card from './Card'

describe('Card', () => {
  it('renders text and author', () => {
    const testText = 'Test text'
    const testAuthor = 'Example Author'

    render(<Card text={testText} author={testAuthor} />)

    const testTextItem = screen.getByText(testText)
    const testAuthorItem = screen.getByText(testAuthor)

    expect(testTextItem).toBeInTheDocument()
    expect(testAuthorItem).toBeInTheDocument()
  })
})
