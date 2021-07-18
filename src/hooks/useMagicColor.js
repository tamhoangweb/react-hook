import { useEffect, useState, useRef } from "react";

const randomColor = (currentColor) => {
  const COLOR_LIST = ["green", "blue", "yellow", "violet", "black", "white"];
  let newColorList = COLOR_LIST;
  if (currentColor) {
    newColorList = COLOR_LIST.filter((color) => color !== currentColor);
  }

  const randomIndex = Math.trunc(Math.random() * newColorList.length);
  return newColorList[randomIndex];
};
function useMagicColor() {
  const [color, setColor] = useState("transparent");
  const colorRef = useRef("transparent");

  useEffect(() => {
    const colorInterval = setInterval(() => {
      console.log("useState: ", color);
      console.log("colorRef: ", colorRef.current);
      const newColor = randomColor(colorRef.current);
      setColor(newColor);
      colorRef.current = newColor;
    }, 1000);
    return () => {
      clearInterval(colorInterval);
    };
  }, []);
  return color;
}

export default useMagicColor;
