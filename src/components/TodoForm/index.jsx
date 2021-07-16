import React, { useState } from 'react'
import PropTypes from 'prop-types'

function TodoForm(props) {
  const { onSubmitForm } = props
  const [value, setValue] = useState('')
  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (!onSubmitForm) return

    const formValues = {
      title: value
    }
    onSubmitForm(formValues)

    setValue('')
  }
  return (
    <form onSubmit={handleSubmitForm} style={{ textAlign: "center" }}>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    </form>
  )
}

TodoForm.propTypes = {
  onSubmitForm: PropTypes.func,
}
TodoForm.defaultProps = {
  onSubmitForm: null
}

export default TodoForm

