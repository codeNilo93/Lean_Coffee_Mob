import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Card from './Card'

const mockOnClick = jest.fn()
const testText = 'Test text'
const testAuthor = 'Example Author'
const testId = 1

describe('Card', () => {
  it('renders text and author', () => {
    render(
      <Card
        text={testText}
        author={testAuthor}
        id={testId}
        onDeleteQuestion={mockOnClick}
      />
    )

    const testTextItem = screen.getByText(testText)
    const testAuthorItem = screen.getByText(testAuthor)

    expect(testTextItem).toBeInTheDocument()
    expect(testAuthorItem).toBeInTheDocument()
  })

  it('button has onClick functionality', () => {
    render(
      <Card
        text={testText}
        author={testAuthor}
        id={testId}
        onDeleteQuestion={mockOnClick}
      />
    )

    const buttonItem = screen.getByRole('button')
    userEvent.click(buttonItem)
    expect(mockOnClick).toHaveBeenCalled()
  })
})
