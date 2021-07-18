import { useState, useEffect } from "react";

const formatDate = (date) => {
  if (!date) return;
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);
  return `${hours}:${minutes}:${seconds}`;
};
function useClock() {
  const [timeString, setTimeString] = useState("");
  useEffect(() => {
    const timeSetInterval = setInterval(() => {
      const now = new Date();
      setTimeString(formatDate(now));
    }, 1000);
    return () => {
      clearInterval(timeSetInterval);
    };
  }, []);
  return { timeString };
}

export default useClock;
