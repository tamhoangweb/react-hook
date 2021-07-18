import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

function PostFilterSearchForm(props) {
  const { onSubmit } = props
  const [searchTerm, setSearchTerm] = useState('')
  const typingTimeoutRef = useRef(null)

  const handleInputChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)

    // Nếu user tiếp tục typing thì clearTimeout, rồi sau đó mới setTimeout lại từ đầu
    typingTimeoutRef.current && clearTimeout(typingTimeoutRef.current)
    //Settimout 300ms sau khi gõ
    typingTimeoutRef.current = setTimeout(() => {

      const formValues = {
        searchTerm: value
      }
      onSubmit && onSubmit(formValues)
    }, 300);

  }
  return (
    <div>
      <form>
        <input
          value={searchTerm}
          type="text"
          placeholder="Nhập từ cần tìm"
          onChange={handleInputChange}
        />
      </form>
    </div>
  )
}

PostFilterSearchForm.propTypes = {
  onSubmit: PropTypes.func,
}
PostFilterSearchForm.defaultProps = {
  onSubmit: null,
}

export default PostFilterSearchForm

