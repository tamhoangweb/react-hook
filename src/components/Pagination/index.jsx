import React from 'react'
import PropTypes from 'prop-types'

function Pagination(props) {
  const { pagination, onPaginationChange } = props
  const { _limit, _page, _totalRows } = pagination
  const totalPages = Math.ceil(_totalRows / _limit)

  const handleButtonClick = (newPage) => {
    onPaginationChange(newPage)
  }
  return (
    <div>
      <button
        disabled={_page <= 1}
        onClick={() => handleButtonClick(_page - 1)}
      >Prev</button>
      <button
        disabled={_page >= totalPages}
        onClick={() => handleButtonClick(_page + 1)}
      >Next</button>
    </div>
  )
}

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPaginationChange: PropTypes.func,
}
Pagination.defaultProps = {
  pagination: {},
  onPaginationChange: null
}

export default Pagination

