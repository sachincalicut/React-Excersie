import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    return () => clearInterval(id.current);
  }, []);

  let id = useRef();

  function handelTime() {
    id.current = setInterval(() => {
      setTime((prev) => prev + 1);
      console.log(time);
    }, 1000);
  }

  return (
    <div className="App">
      <h1>{time}</h1>
      <button onClick={() => handelTime()}>Start</button>
      <button onClick={() => clearInterval(id.current)}>Pause</button>
      <button
        onClick={() => {
          clearInterval(id.current);
          setTime(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
