import { useState, useEffect } from "react";

function App() {
  // useState Hook
  const [count, setCount] = useState(0);

  // useEffect Hook
  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);

  // Event handlers
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="container">
      <h1>Vite React Hooks Activity</h1>

      <h2>Count: {count}</h2>

      <div className="buttons">
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;