import React from 'react'

import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo)
  }

  const onClickComplete = (todo) => () => {
    completeTodo(todo)
  }

  if (!todos) {
    return <p>No todos</p>
  }

  return (
    <>
      {todos.map(todo => {
        return <Todo key={todo.id} onClickDelete={onClickDelete} onClickComplete={onClickComplete} todo={todo} />
      }).reduce((acc, cur) => [...acc, <hr />, cur], [])}
    </>
  )
}

export default TodoList
