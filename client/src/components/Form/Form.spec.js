import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from './Form'

const mockOnSubmit = jest.fn()

test('loads item', () => {
  render(<Form onAddQuestion={mockOnSubmit} />)
  const inputItem = screen.getByPlaceholderText('Please enter your question')
  expect(inputItem).toBeInTheDocument()

  const labelItem = screen.getByLabelText('Question')
  expect(labelItem).toBeInTheDocument()

  const buttonItem = screen.getByText('Save')
  expect(buttonItem).toBeInTheDocument()
})

test('button has onClick functionality', () => {
  render(<Form onAddQuestion={mockOnSubmit} />)

  const buttonItem = screen.getByText('Save')
  userEvent.click(buttonItem)
  expect(mockOnSubmit).toHaveBeenCalled()
})
