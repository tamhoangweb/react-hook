import React, { useState } from "react";
import './ColorBox.scss'

const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue'];

const getRandomColor = () => {
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex]
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem('color') || 'deeppink'
    return initColor
  });
  const handleClick = () => {
    const newColor = getRandomColor();
    setColor(newColor)
    localStorage.setItem('color', newColor)
  }
  return (
    <div className="color-box" style={{ backgroundColor: color, width: "200px", height: "200px", margin: "auto", color: "#fff" }} onClick={handleClick}>
      Color box
    </div>
  );
}

export default ColorBox;
