import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from './Form'

test('loads item', () => {
  const mockOnSubmit = jest.fn()

  render(<Form onAddQuestion={mockOnSubmit} />)
  const inputItem = screen.getByPlaceholderText('Please enter your question')
  expect(inputItem).toBeInTheDocument()

  const labelItem = screen.getByLabelText('Question')
  expect(labelItem).toBeInTheDocument()

  const buttonItem = screen.getByText('Save')
  expect(buttonItem).toBeInTheDocument()
})

test('button has onClick functionality', () => {
  const mockOnSubmit = jest.fn()

  render(<Form onAddQuestion={mockOnSubmit} />)

  const buttonItem = screen.getByText('Save')
  userEvent.click(buttonItem)
  expect(mockOnSubmit).toHaveBeenCalled()
})

// TODO:
// Please add another test, which tests that the callback function is called with the correct data.
