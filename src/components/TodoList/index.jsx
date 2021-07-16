import React from 'react'
import PropTypes from 'prop-types'

function TodoList(props) {
  const { todos, onTodoClick } = props
  const handleTodoClick = (todo) => {
    onTodoClick && onTodoClick(todo)
  }
  return (
    <ul className="todo-list">
      {
        todos.map(todo => (
          <li key={todo.id} onClick={() => handleTodoClick(todo)}>{todo.title}</li>
        ))
      }
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
}
TodoList.defaultProps = {
  todos: [],
  onTodoClick: null
}

export default TodoList

