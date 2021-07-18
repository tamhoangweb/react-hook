import React from 'react'
import './MagicColorBox.scss'
import useMagicColor from '../../hooks/useMagicColor'

function MagicColorBox(props) {
  const color = useMagicColor()
  return (
    <div className="magic-color-box" style={{ backgroundColor: color }}>

    </div>
  )
}

export default MagicColorBox

