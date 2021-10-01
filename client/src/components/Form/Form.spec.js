import { render, screen } from '@testing-library/react'
import Form from './Form'

test('loads item', () => {
  render(<Form />)
  const inputItem = screen.getByPlaceholderText('Please enter your question')
  expect(inputItem).toBeInTheDocument()

  const labelItem = screen.getByLabelText('Question')
  expect(labelItem).toBeInTheDocument()

  const buttonItem = screen.getByText('Save')
  expect(buttonItem).toBeInTheDocument()
})
