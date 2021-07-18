import React from 'react'
import PropTypes from 'prop-types'

function Hero(props) {
  const { name } = props
  console.log(name)
  return (
    <div>
      {name}
    </div>
  )
}

Hero.propTypes = {
  name: PropTypes.string,
}
Hero.defaultProps = {
  name: 'Tam',
}

export default React.memo(Hero)

