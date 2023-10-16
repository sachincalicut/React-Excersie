import "./styles.css";
import React, { useState } from "react";
import Callback from "./Callback";
// Parent
export default function App() {
  const [UIcolor, setUIColor] = useState(null);
  // Callback Function
  const getColor = (color) => {
    setUIColor(color);
  };

  return (
    <div className="App">
      <h1>Pass Data Parent to child by using Callback</h1>
      <div
        className="App_color_wrapper"
        style={{ background: `${UIcolor}` }}
      ></div>
      <Callback getColor={getColor} />
    </div>
  );
}
