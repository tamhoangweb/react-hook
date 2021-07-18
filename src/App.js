import "./App.scss";

import React, { useState } from "react";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);
  const handleHeroClick = () => {};
  return (
    <div className="app">
      <h1>React - Memoization</h1>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <Hero name="Welcome to FrontEnd" onClick={handleHeroClick} />
    </div>
  );
}

export default App;
