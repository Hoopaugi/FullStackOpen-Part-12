import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Todo from './Todo'

describe('Todo', () => {
  test('renders content', () => {
    const todo = {
      text: 'Component testing is done with react-testing-library',
      done: false
    }
  
    const mockDeleteHandler = jest.fn()
    const mockCompleteHandler = jest.fn()
  
    render(<Todo onClickDelete={mockDeleteHandler} onClickComplete={mockCompleteHandler} todo={todo} />)
  
    const element = screen.getByText('Component testing is done with react-testing-library')
    expect(element).toBeDefined()
  })

  test('Can delete', async () => {
    const todo = {
      text: 'Component testing is done with react-testing-library',
      done: false
    }
  
    const mockDeleteHandler = jest.fn()
    const mockCompleteHandler = jest.fn()
  
    render(<Todo onClickDelete={mockDeleteHandler} onClickComplete={mockCompleteHandler} todo={todo} />)
  
    const user = userEvent.setup()
  
    const deleteButton = screen.getByText('Delete')

    await user.click(deleteButton)
  
    expect(mockDeleteHandler.mock.calls).toHaveLength(2)
  })

  test('Can mark completed', async () => {
    const todo = {
      text: 'Component testing is done with react-testing-library',
      done: false
    }
  
    const mockDeleteHandler = jest.fn()
    const mockCompleteHandler = jest.fn()
  
    render(<Todo onClickDelete={mockDeleteHandler} onClickComplete={mockCompleteHandler} todo={todo} />)
  
    const user = userEvent.setup()
  
    const completeButton = screen.getByText('Set as done')

    await user.click(completeButton)
  })
})
