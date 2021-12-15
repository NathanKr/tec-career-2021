import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [initialCount, setInitialCount] = useState(0);
  
  return (
    <div className="App">
      <label>Initial counter value  </label> 
      <input
        type="number"
        defaultValue={initialCount}
        onChange={(evt) => {
          setInitialCount(Number(evt.target.value));
        }}
      />
      <br /><br />
      <Counter initialCount={initialCount} />
    </div>
  );
}

export default App;
